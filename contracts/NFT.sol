// // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";



contract NFT is ERC721URIStorage {
    uint256 tokenCounter;
    /// @notice constructor function will pass collection name and symbol to the parent contract that we have inherited from openzeppelin
    constructor() ERC721("Dog Collection", "DOG") {
        tokenCounter = 0;
    }

    /// @notice An aritst can mint their NFT using this function
    function createCollectible(
        string memory _tokenURI
    ) public returns (uint256) {
        uint256 newTokenId = tokenCounter;
        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, _tokenURI);
        
        return newTokenId;
    }

    
}
