// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {Ticket} from "./Ticket.sol";

contract EventRegistry {
    // TYPE DECLARATION
    struct EventInformation {
        string title;
        string description;
        string location;
        uint32 ticketSaleStart;
        uint32 ticketSaleEnd;
        uint32 eventTimestamp;
        address eventOwner;
        uint32 maxEventCapacity;
        uint32 maxGroupSize;
    }

    struct FriendGroup {
        uint96 groupId;
        address groupOwner;
    }

    bytes32 constant EMPTY_BYTES32 = bytes32(0);

    // STATE VARIABLES
    mapping(bytes32 eventId => EventInformation eventInformation) private eventInformationById;
    bytes32[] private allEvents;
    uint96 private nextFriendGroup = 0;

    mapping(bytes32 eventId => bytes32 seed) private ticketBallotSeed;
    mapping(bytes32 eventId => uint256 ticketCount) private ticketsRequestedCount;
    mapping(bytes32 eventId => Ticket ticketContract) public getTicketContract;
    mapping(bytes32 eventId => bytes32[] friendGroups) private ticketsRequested;

    mapping(bytes32 eventId => uint256 ticketCount) private ticketBallotAllocation;
    mapping(bytes32 eventId => mapping(address groupOwner => uint96 groupId)) public getEventUserGroup;

    mapping(uint96 groupId => address[] friends) private groupFriends;

    // ERRORS
    error EventAlreadyRegistered();
    error EventNotFound();
    error OutOfBounds();
    error TicketsAlreadyAllocated();
    error TicketSaleHasntStarted();
    error TicketSaleFinished();
    error TooManyFriends();
    error EventOversubscribed();
    error AlreadyHasGroup();
    error DidNotApplyForTickets();

    // EVENTS
    event EventRegistered(bytes32 indexed eventId, uint32 indexed eventTimestamp);
    event BallotEntered(bytes32 indexed eventId, address indexed groupOwner, address[] groupMembers);
    event TicketReceived(bytes32 indexed eventId, address receiver);
    event TicketsAllocated(bytes32 indexed eventId, uint256 ballotSize);

    // MODIFIERS

    // FUNCTIONS
    function registerEvent(
        string calldata title,
        string calldata description,
        string calldata location,
        uint32 ticketSaleStart,
        uint32 ticketSaleEnd,
        uint32 eventTimestamp,
        uint32 maxEventCapacity,
        uint32 maxGroupSize
    ) external returns (bytes32) {
        EventInformation memory eventInformation = EventInformation({
            title: title,
            description: description,
            location: location,
            ticketSaleStart: ticketSaleStart,
            ticketSaleEnd: ticketSaleEnd,
            eventTimestamp: eventTimestamp,
            eventOwner: msg.sender,
            maxEventCapacity: maxEventCapacity,
            maxGroupSize: maxGroupSize
        });
        bytes32 eventHash = _getEventHash(eventInformation);

        if (eventInformationById[eventHash].eventTimestamp > 0) {
            revert EventAlreadyRegistered();
        }

        eventInformationById[eventHash] = eventInformation;
        allEvents.push(eventHash);
        emit EventRegistered(eventHash, eventTimestamp);

        getTicketContract[eventHash] =
            new Ticket{salt: eventHash}(title, string.concat("TICKIT-", _getShortHash(eventHash)), eventHash);

        return eventHash;
    }
	
	//TODO: this function should initiate the ballot

    function requestTicket(bytes32 eventId, address[] calldata friends) external {
        EventInformation memory eventInfo = _getEventById(eventId);
        uint256 numberOfTicketsRequested = friends.length + 1;

        // make sure we are below the max group size
        if (numberOfTicketsRequested > eventInfo.maxGroupSize) {
            revert TooManyFriends();
        }

        if (block.timestamp > eventInfo.ticketSaleEnd) {
            revert TicketSaleFinished();
        }

        if (getEventUserGroup[eventId][msg.sender] > 0) {
            revert AlreadyHasGroup();
        }

        // If we are in ballot mode, let anyone apply for tickets.
        if (ticketBallotSeed[eventId] == EMPTY_BYTES32) {
            FriendGroup memory group = FriendGroup({groupId: ++nextFriendGroup, groupOwner: msg.sender});

            groupFriends[group.groupId] = friends;
            ticketsRequested[eventId].push(_toBytes32(group));
            getEventUserGroup[eventId][msg.sender] = group.groupId;
            ticketsRequestedCount[eventId] += numberOfTicketsRequested;
            emit BallotEntered(eventId, msg.sender, friends);
        } else {
            // if we aren't in ballot mode, we should just allocate tickets
            if (numberOfTicketsRequested + ticketsRequestedCount[eventId] > eventInfo.maxEventCapacity) {
                revert EventOversubscribed();
            }
            // we don't need to track the group info as the tickets can already be minted
            ticketsRequestedCount[eventId] += numberOfTicketsRequested;
			_distributeTickets(eventId, msg.sender, friends);
        }
    }

    function issueTickets(bytes32 eventId) external {
        EventInformation memory eventInfo = _getEventById(eventId);
        // can only be called once the ticket sale has started
        // if the number of users with ballot tickets exceeds the capacity of the event, then a ballot is initiated to select who can attend
        // if the nuber of users is below capacity, then all users will receive tickets
        if (ticketBallotSeed[eventId] != EMPTY_BYTES32) {
            revert TicketsAlreadyAllocated();
        }
        if (block.timestamp < eventInfo.ticketSaleStart) {
            revert TicketSaleHasntStarted();
        }

        ticketBallotSeed[eventId] = keccak256(abi.encode(block.prevrandao));
        // snapshot the number of tickets requested in ballot
        ticketBallotAllocation[eventId] = ticketsRequestedCount[eventId];

        emit TicketsAllocated(eventId, ticketsRequestedCount[eventId]);
    }

    function claimTickets(bytes32 eventId) external {
        EventInformation memory eventInfo = _getEventById(eventId);
        uint96 groupId = getEventUserGroup[eventId][msg.sender];
        if (groupId == 0) {
            revert DidNotApplyForTickets();
        }
        if (ticketBallotSeed[eventId] == EMPTY_BYTES32) {
            revert TicketSaleHasntStarted();
        }
        // Generate a random seed from the original seed
        bytes32 seed = keccak256(abi.encode(ticketBallotSeed[eventId], groupId));

        // maybe you got lucky... maybe you didn't
        // this function might overflow - need to add checks
        if (checkSeed(seed, ticketBallotAllocation[eventId], eventInfo.maxEventCapacity, groupFriends[groupId].length+1)) {
			_distributeTickets(eventId, msg.sender, groupFriends[groupId]);
        }
    }

    function checkBallotGroupAllocation(bytes32 eventId, uint96 groupId) external view returns (uint256) {
        EventInformation memory eventInfo = _getEventById(eventId);
        if (groupId == 0) {
            revert DidNotApplyForTickets();
        }
        if (ticketBallotSeed[eventId] == EMPTY_BYTES32) {
            revert TicketSaleHasntStarted();
        }
        bytes32 seed = keccak256(abi.encode(ticketBallotSeed[eventId], groupId));
        if (checkSeed(seed, ticketBallotAllocation[eventId], eventInfo.maxEventCapacity, groupFriends[groupId].length+1)) {
            return groupFriends[groupId].length + 1;
        }
        return 0;
    }

	function _distributeTickets(bytes32 eventId, address groupOwner, address[] memory groupMembers) internal {
            Ticket ticketContract = getTicketContract[eventId];
            ticketContract.mint(groupOwner);
            emit TicketReceived(eventId, groupOwner);
            for (uint256 i = 0; i < groupMembers.length; i++) {
                ticketContract.mint(groupMembers[i]);
                emit TicketReceived(eventId, groupMembers[i]);
            }
	}


	function checkSeed(bytes32 seed, uint256 ballotedAllocation, uint256 maxEventCapacity, uint256 usersInGroup) internal pure returns (bool) {
		return (uint256(seed) % ballotedAllocation < maxEventCapacity * usersInGroup);
	}

    function getEventById(bytes32 eventId) external view returns (EventInformation memory) {
        return _getEventById(eventId);
    }

    function listEvents(uint256 offset, uint256 limit) external view returns (EventInformation[] memory) {
        if (offset + limit > allEvents.length) {
            revert OutOfBounds();
        }
        EventInformation[] memory infos = new EventInformation[](limit);
        for (uint256 i = 0; i < limit; i++) {
            infos[i] = _getEventById(allEvents[i + offset]);
        }
        return infos;
    }

    function _getEventById(bytes32 eventId) internal view returns (EventInformation memory) {
        if (eventInformationById[eventId].eventTimestamp > 0) {
            return eventInformationById[eventId];
        }
        revert EventNotFound();
    }

    function _getEventHash(EventInformation memory eventInfo) internal pure returns (bytes32) {
        return
            keccak256(abi.encode(eventInfo.title, eventInfo.description, eventInfo.location, eventInfo.eventTimestamp));
    }

    function _toBytes32(FriendGroup memory group) internal pure returns (bytes32) {
        return bytes32(abi.encode(group));
    }

    function _getShortHash(bytes32 eventId) internal pure returns (string memory) {
        return string(abi.encodePacked(bytes4(eventId)));
    }
}
