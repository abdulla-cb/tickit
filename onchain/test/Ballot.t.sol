// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {EventRegistry} from "../src/EventRegistry.sol";

contract BallotTest is Test {
    EventRegistry public eventRegistry;
	bytes32 eventId;
	uint256 constant testUsersCount = 20;
	address[] users;

    function setUp() public {
        eventRegistry = new EventRegistry();
		eventId = _registerEvent();

		for(uint i=0; i<testUsersCount; i++) {
			users.push(makeAddr(string.concat("test user #", string(abi.encode(i)))));
			_requestTicketAlone(users[i]);
		}
		vm.warp(block.timestamp + 4 days);
    }

	function test_CanIssueTickets() external {
		vm.expectEmit();
		emit EventRegistry.TicketsAllocated(eventId, 20);
		eventRegistry.issueTickets(eventId);
	}

	function test_RevertCantIssueTicketsTwice() external {
		eventRegistry.issueTickets(eventId);
		vm.expectRevert();
		eventRegistry.issueTickets(eventId);
	}

	function test_canClaimTickets() external {
		eventRegistry.issueTickets(eventId);

		for (uint i=0;i<testUsersCount; i++) {
			vm.prank(users[i]);
			eventRegistry.claimTickets(eventId);
		}
	}

	function _requestTicketAlone(address user) internal {
		address[] memory noFriends = new address[](0);
		vm.prank(user);
		eventRegistry.requestTicket(eventId, noFriends);
	}


    function _registerEvent() internal returns (bytes32) {
        return _registerEvent(0);
    }

    function _registerEvent(uint256 seed) internal returns (bytes32) {
		// max capacity of 10
		// max group size of 4
		// event starts in 3 days
        return eventRegistry.registerEvent(
            "My Test Event",
            "My super based event which you should all come to",
            string(abi.encodePacked(keccak256(abi.encode(seed)))),
            uint32(block.timestamp + 3 days),
            uint32(block.timestamp + 7 days),
            uint32(block.timestamp + 14 days),
            10,
            4
        );
    }
}
