// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {EventRegistry} from "../src/EventRegistry.sol";
import {Ticket} from "../src/Ticket.sol";

contract TicketNFTTest is Test {
    EventRegistry public eventRegistry;
    bytes32 eventId;
    address alice = makeAddr("alice");
    Ticket ticket;

    function setUp() public {
        eventRegistry = new EventRegistry();
        eventId = _registerEvent();

        address[] memory noFriends = new address[](0);
        vm.warp(block.timestamp + 4 days);
        vm.prank(alice);
        vm.expectEmit();
        emit EventRegistry.TicketReceived(eventId, alice);
        eventRegistry.requestTicket(eventId, noFriends);

        ticket = eventRegistry.getTicketContract(eventId);
    }

    function test_nftMetadata() public view {
        // string memory metadata = ticket.tokenURI(1);
    }

    function _requestTicketAlone(address user) internal {
        address[] memory noFriends = new address[](0);
        vm.prank(user);
        eventRegistry.requestTicket(eventId, noFriends);
    }

    function _registerEvent() internal returns (bytes32) {
        // max capacity of 10
        // max group size of 4
        // event starts in 3 days
        return eventRegistry.registerEvent(
            "My Test Event",
            "My super based event which you should all come to",
            "Event Location",
            uint32(block.timestamp + 3 days),
            uint32(block.timestamp + 7 days),
            uint32(block.timestamp + 14 days),
            10,
            4
        );
    }
}
