// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ERC721} from "solmate/tokens/ERC721.sol";
import {IEventRegistry} from "./interfaces/IEventRegistry.sol";
import {Base64} from "solady/utils/Base64.sol";
import {LibString} from "solady/utils/Libstring.sol";

contract Ticket is ERC721 {
    using LibString for string;

    IEventRegistry immutable eventRegistry;
    bytes32 immutable eventId;
    uint256 nextTokenId = 0;

    error OnlyEventRegistry();

    constructor(string memory _name, bytes32 _eventId)
        ERC721(_name, LibString.concat("TICKIT-",LibString.toHexStringNoPrefix(uint256(_eventId)).slice(0, 8)))
    {
        eventRegistry = IEventRegistry(msg.sender);
        eventId = _eventId;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        IEventRegistry.EventInformation memory eventInfo = eventRegistry.getEventById(eventId);

        string[9] memory parts;
        parts[0] =
            '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350"><style>.base { fill: white; font-family: serif; font-size: 14px; }</style><rect width="100%" height="100%" fill="black" /><text x="10" y="20" class="base">';
        parts[1] = eventInfo.title;
        parts[2] = '</text><text x="10" y="40" class="base">';
        parts[3] = eventInfo.description;
        parts[4] = '</text><text x="10" y="60" class="base">';
        parts[5] = eventInfo.location;
        parts[6] = '</text><text x="10" y="80" class="base">';
        parts[7] = LibString.toHexStringChecksummed(ownerOf(tokenId));
        parts[8] = "</text></svg>";

        string memory output = string(
            abi.encodePacked(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5], parts[6], parts[7], parts[8])
        );
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Ticket #',
                        LibString.toString(tokenId),
                        '", "description": "',
						eventInfo.description,
						'", "image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(output)),
                        '"}'
                    )
                )
            )
        );
        output = string(abi.encodePacked("data:application/json;base64,", json));

        return output;
    }

    function mint(address to) external onlyEventRegistry {
        _mint(to, ++nextTokenId);
    }

    modifier onlyEventRegistry() {
        if (msg.sender != address(eventRegistry)) {
            revert OnlyEventRegistry();
        }
        _;
    }
}
