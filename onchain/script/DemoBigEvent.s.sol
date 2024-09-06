// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {EventRegistry} from "../src/EventRegistry.sol";
import {ITicket} from "../src/interfaces/ITicket.sol";

contract RunBigEvent is Script {
    EventRegistry public eventRegistry;

    function setUp() public {
        eventRegistry = new EventRegistry();
    }

    function run() public {
        // Create the event so the sale starts in one week
        bytes32 eventId = eventRegistry.registerEvent(
            "Noasis",
            "Noasis announce their first tour in 16 years. These will be their only shows, and could be one of the biggest live moments and hottest tickets of the decade.",
            "Neaton Park, Nanchester",
            uint32(block.timestamp + 7 days),
            uint32(block.timestamp + 365 days),
            uint32(block.timestamp + 365 days),
            60_000,
            4
        );

        // Get lots of people to apply!
        uint256 i = 0;
        for (; i < 50_000; i++) {
            address[] memory noFriends = new address[](0);
            vm.prank(address(uint160(i)));
            eventRegistry.requestTicket(eventId, noFriends);
        }
        for (; i < 100_000; i++) {
            address[] memory oneFriend = new address[](1);
            vm.prank(address(uint160(i)));
            oneFriend[0] = address(uint160(i++));
            eventRegistry.requestTicket(eventId, oneFriend);
        }
        for (; i < 120_000; i++) {
            address[] memory twoFriends = new address[](2);
            vm.prank(address(uint160(i)));
            twoFriends[0] = address(uint160(i++));
            twoFriends[1] = address(uint160(i++));
            eventRegistry.requestTicket(eventId, twoFriends);
        }
        for (; i < 150_000; i++) {
            address[] memory threeFriends = new address[](3);
            vm.prank(address(uint160(i)));
            threeFriends[0] = address(uint160(i++));
            threeFriends[1] = address(uint160(i++));
            threeFriends[2] = address(uint160(i++));
            eventRegistry.requestTicket(eventId, threeFriends);
        }

        // The ticket sale will be open now
        vm.warp(block.timestamp + 10 days);

        // Do the roll
        eventRegistry.issueTickets(eventId);

        for (i = 0; i < 150_000; i++) {
            vm.prank(address(uint160(i)));
            try eventRegistry.claimTickets(eventId) {}
            catch {
                // they didn't apply for tickets...
            }
        }

        ITicket ticket = eventRegistry.getTicketContract(eventId);
        uint256 tokensIssued = uint256(vm.load(address(ticket), bytes32(uint256(6))));
        console.log(tokensIssued);
    }
}
