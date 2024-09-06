// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {EventRegistry} from "../src/EventRegistry.sol";

contract TickitDeployScript is Script {
    EventRegistry public eventRegistry;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        eventRegistry = new EventRegistry();

        vm.stopBroadcast();
    }
}
