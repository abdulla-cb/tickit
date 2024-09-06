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
        bytes32 eventHash = _registerEvent();
        eventRegistry.getEventById(eventHash);
    }

    function test_list1EventNoOffset() external whenEventsRegistered(1) {
        EventRegistry.EventInformationWithHash[] memory infos = eventRegistry.listEvents(0, 1);
        assertEq(infos.length, 1);
    }

    function test_list2EventNoOffset() external whenEventsRegistered(2) {
        EventRegistry.EventInformationWithHash[] memory infos = eventRegistry.listEvents(0, 2);
        assertEq(infos.length, 2);
    }

    function test_list2EventNoOffsetWithOverflow() external whenEventsRegistered(1) {
        vm.expectRevert(EventRegistry.OutOfBounds.selector);
        eventRegistry.listEvents(0, 2);
    }

    function test_list1EventWithOffset1() external whenEventsRegistered(2) {
        EventRegistry.EventInformationWithHash[] memory infos = eventRegistry.listEvents(1, 1);
        assertEq(infos.length, 1);
    }

    function test_list2EventWithOffset1ShouldRevert() external whenEventsRegistered(2) {
        vm.expectRevert(EventRegistry.OutOfBounds.selector);
        eventRegistry.listEvents(1, 2);
    }

    function test_list0Event() external whenEventsRegistered(0) {
        EventRegistry.EventInformationWithHash[] memory infos = eventRegistry.listEvents(0, 0);
        assertEq(infos.length, 0);
    }

    modifier whenEventsRegistered(uint256 count) {
        for (uint256 i = 0; i < count; i++) {
            _registerEvent(i);
        }
        _;
    }

    function _registerEvent() internal returns (bytes32) {
        return _registerEvent(0);
    }

    function _registerEvent(uint256 seed) internal returns (bytes32) {
        return eventRegistry.registerEvent(
            "My Test Event",
            "My super based event which you should all come to",
            string(abi.encodePacked(keccak256(abi.encode(seed)))),
            uint32(block.timestamp),
            uint32(block.timestamp + 7 days),
            uint32(block.timestamp + 14 days),
            100,
            4
        );
    }
}
