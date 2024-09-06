// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {EventRegistry} from "../src/EventRegistry.sol";

contract PreBallotTest is Test {
    EventRegistry public eventRegistry;
    bytes32 eventId;
    address alice = makeAddr("alice");
    address bob = makeAddr("bob");
    address charlie = makeAddr("charlie");
    address dude = makeAddr("dude");
    address eve = makeAddr("eve");

    function setUp() public {
        eventRegistry = new EventRegistry();
        eventId = _registerEvent();
    }

    function test_ApplyBallotWithNoFriends() external {
        address[] memory noFriends = new address[](0);
        vm.prank(alice);
        vm.expectEmit();
        emit EventRegistry.BallotEntered(eventId, alice, noFriends);
        eventRegistry.requestTicket(eventId, noFriends);
    }

    function test_ApplyBallotWithSomeFriends() external {
        address[] memory friends = new address[](3);
        friends[0] = alice;
        friends[1] = bob;
        friends[2] = charlie;
        vm.prank(alice);
        vm.expectEmit();
        emit EventRegistry.BallotEntered(eventId, alice, friends);
        eventRegistry.requestTicket(eventId, friends);
    }

    function test_RevertApplyBallotWithTooManyFriends() external {
        address[] memory friends = new address[](4);
        friends[0] = alice;
        friends[1] = bob;
        friends[2] = charlie;
        friends[3] = dude;
        vm.prank(alice);
        vm.expectRevert(EventRegistry.TooManyFriends.selector);
        eventRegistry.requestTicket(eventId, friends);
    }

    function test_RevertApplyBallotTwice() external {
        address[] memory noFriends = new address[](0);
        vm.startPrank(alice);

        vm.expectEmit();
        emit EventRegistry.BallotEntered(eventId, alice, noFriends);
        eventRegistry.requestTicket(eventId, noFriends);

        vm.expectRevert(EventRegistry.AlreadyHasGroup.selector);
        eventRegistry.requestTicket(eventId, noFriends);

        vm.stopPrank();
    }

    function test_RevertIssueTicketsBeforeSaleStarted() external {
        vm.expectRevert(EventRegistry.TicketSaleHasntStarted.selector);
        eventRegistry.issueTickets(eventId);
    }

    function test_RevertClaimTicketsBeforeSaleStarted() external {
        vm.expectRevert(EventRegistry.TicketSaleHasntStarted.selector);
        eventRegistry.issueTickets(eventId);
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
