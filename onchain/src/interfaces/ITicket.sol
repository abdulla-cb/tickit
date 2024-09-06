// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

interface ITicket {
    error OnlyEventRegistry();

    event Approval(address indexed owner, address indexed spender, uint256 indexed id);
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);
    event Transfer(address indexed from, address indexed to, uint256 indexed id);

    function approve(address spender, uint256 id) external;
    function balanceOf(address owner) external view returns (uint256);
    function getApproved(uint256) external view returns (address);
    function isApprovedForAll(address, address) external view returns (bool);
    function mint(address to) external;
    function name() external view returns (string memory);
    function ownerOf(uint256 id) external view returns (address owner);
    function safeTransferFrom(address from, address to, uint256 id) external;
    function safeTransferFrom(address from, address to, uint256 id, bytes memory data) external;
    function setApprovalForAll(address operator, bool approved) external;
    function supportsInterface(bytes4 interfaceId) external view returns (bool);
    function symbol() external view returns (string memory);
    function tokenURI(uint256 tokenId) external view returns (string memory);
    function transferFrom(address from, address to, uint256 id) external;
}
