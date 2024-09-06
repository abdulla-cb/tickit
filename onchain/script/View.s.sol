// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {EventRegistry} from "../src/EventRegistry.sol";

contract TickitView is Script {
    EventRegistry eventRegistry = EventRegistry(0x0B14cD58D7a18B1f22e634D76Ba4E55f25e1723A);
    bytes32 myEvent = 0xe792c154426523cd95e80ea449b320ad67f135cc757dc62f96d11aed17938eea;

    function run() public view {
        EventRegistry.EventInformation memory eventInfo = eventRegistry.getEventById(myEvent);
        console.log("===Printing info for event===");
        console.logBytes32(myEvent);
        console.log(eventInfo.title);
        console.log(eventInfo.description);
        console.log(eventInfo.location);
    }
}
