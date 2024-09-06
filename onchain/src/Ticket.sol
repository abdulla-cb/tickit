// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ERC721} from "solmate/tokens/ERC721.sol";
import {EventRegistry} from "./EventRegistry.sol";

contract Ticket is ERC721 {
	address immutable eventRegistry;
	bytes32 immutable eventId;
	uint256 nextTokenId = 1;

	error OnlyEventRegistry();

	constructor(string memory _name, string memory _symbol, bytes32 _eventId) ERC721(_name, _symbol) {
		eventRegistry = msg.sender;
		eventId = _eventId;
	}

	function tokenURI(uint256 id) public view override returns (string memory) {
		EventRegistry.EventInformation memory eventInfo = EventRegistry(eventRegistry).getEventById(eventId);

		string[7] memory parts;
        parts[0] = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350"><style>.base { fill: white; font-family: serif; font-size: 14px; }</style><rect width="100%" height="100%" fill="black" /><text x="10" y="20" class="base">';
		parts[1] = eventInfo.title;
		parts[2] = '</text><text x="10" y="40" class="base">';
		parts[3] = eventInfo.description;
		parts[4] = '</text><text x="10" y="60" class="base">';
		parts[5] = eventInfo.location;
		parts[6] = '</text></svg>';

		string memory output = string(abi.encodePacked(parts[0], parts[1], parts[2], parts[3], parts[4], parts[5], parts[6]));
        string memory json = Base64.encode(bytes(string(abi.encodePacked('{"name": "Bag #', toString(tokenId), '", "description": "Loot is randomized adventurer gear generated and stored on chain. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use Loot in any way you want.", "image": "data:image/svg+xml;base64,', Base64.encode(bytes(output)), '"}'))));
        output = string(abi.encodePacked('data:application/json;base64,', json));

        return output;
	}

	function mint(address to) external onlyEventRegistry {
		_mint(to, ++nextTokenId);
	}

	modifier onlyEventRegistry {
		if (msg.sender != eventRegistry) {
			revert OnlyEventRegistry();
		}
		_;
	}
}
