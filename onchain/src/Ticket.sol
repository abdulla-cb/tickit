// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {ERC721} from "solmate/tokens/ERC721.sol";

contract Ticket is ERC721 {
	address immutable eventRegistry;
	uint256 nextTokenId = 1;

	error OnlyEventRegistry();

	constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {
		eventRegistry = msg.sender;
	}

	function tokenURI(uint256 id) public view override returns (string memory) {
		return string(abi.encode(id));
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
