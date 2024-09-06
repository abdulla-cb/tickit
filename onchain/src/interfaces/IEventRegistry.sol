// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import {ITicket} from "./ITicket.sol";

interface IEventRegistry {
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

    struct EventInformationWithHash {
        bytes32 hash;
        EventInformation info;
    }

    struct FriendGroup {
        uint96 groupId;
        address groupOwner;
    }

    error AlreadyHasGroup();
    error DidNotApplyForTickets();
    error EventAlreadyRegistered();
    error EventNotFound();
    error EventOversubscribed();
    error OutOfBounds();
    error TicketSaleFinished();
    error TicketSaleHasntStarted();
    error TicketsAlreadyAllocated();
    error TooManyFriends();

    event BallotEntered(bytes32 indexed eventId, address indexed groupOwner, address[] groupMembers);
    event EventRegistered(bytes32 indexed eventId, uint32 indexed eventTimestamp);
    event TicketReceived(bytes32 indexed eventId, address receiver);
    event TicketsAllocated(bytes32 indexed eventId, uint256 ballotSize);

    function checkBallotGroupAllocation(bytes32 eventId, uint96 groupId) external view returns (uint256);
    function claimTickets(bytes32 eventId) external;
    function getEventById(bytes32 eventId) external view returns (EventInformation memory);
    function getEventUserGroup(bytes32 eventId, address groupOwner) external view returns (uint96 groupId);
    function getNumberOfEvents() external view returns (uint256);
    function getTicketContract(bytes32 eventId) external view returns (ITicket ticketContract);
    function issueTickets(bytes32 eventId) external;
    function listEvents(uint256 offset, uint256 limit) external view returns (EventInformationWithHash[] memory);
    function registerEvent(
        string memory title,
        string memory description,
        string memory location,
        uint32 ticketSaleStart,
        uint32 ticketSaleEnd,
        uint32 eventTimestamp,
        uint32 maxEventCapacity,
        uint32 maxGroupSize
    ) external returns (bytes32);
    function requestTicket(bytes32 eventId, address[] memory friends) external;
}
