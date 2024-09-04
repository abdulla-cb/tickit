// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {EventRegistry} from "../src/EventRegistry.sol";

contract EventRegistryTest is Test {
    EventRegistry public eventRegistry;

    function setUp() public {
        eventRegistry = new EventRegistry();
    }

    function test_RegisterEvent() external {
        bytes32 eventHash = eventRegistry.registerEvent(
            "My Test Event",
            "My super based event which you should all come to",
            "London, UK",
            uint32(block.timestamp),
            uint32(block.timestamp + 7 days),
            uint32(block.timestamp + 14 days),
            100,
            4
        );

        eventRegistry.getEventById(eventHash);
    }
}
