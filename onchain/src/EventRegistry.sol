// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

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

    // STATE VARIABLES
    mapping(bytes32 eventId => EventInformation eventInformation) private eventInformationById;

    // ERRORS
    error EventAlreadyRegistered();
    error EventNotFound();

    // EVENTS
    event EventRegistered(bytes32 indexed eventHash, uint32 indexed eventTimestamp);

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
        emit EventRegistered(eventHash, eventTimestamp);
        return eventHash;
    }

    function getEventById(bytes32 eventId) external view returns (EventInformation memory) {
        if (eventInformationById[eventId].eventTimestamp > 0) {
            return eventInformationById[eventId];
        }
        revert EventNotFound();
    }

    function _getEventHash(EventInformation memory eventInfo) internal pure returns (bytes32) {
        return
            keccak256(abi.encode(eventInfo.title, eventInfo.description, eventInfo.location, eventInfo.eventTimestamp));
    }
}