// // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interface/IERC721.sol";

contract debt{

    uint256 private NFTDebtCounter = 0;
    uint256 private NFTBidCounter = 0;
    address public OWNER;
    mapping(uint256=>NFTDebt) NFTDebtList;
    mapping(uint256=>NFTBid) NFTBidList;
    uint256 private marketcommission;

    struct NFTDebt{
        uint256 id;
        address owner;
        address lender;
        address NFTAddress;
        address NFTCollectionAddress;
        uint256 tokenId;
        uint256 DebtAmount;
        uint256 interest;
        uint256 returnTime;
        uint256 numberOfBids;
        DebtStatus status;
    }

    enum DebtStatus{
        ACTIVE,
        REMOVED,
        DEBT,
        SUCCESS,
        FAILURE
    }

    enum BidStatus{
        ACTIVE,
        REMOVED,
        ACCEPTED
    }

    struct NFTBid{
        uint256 id;
        uint256 NFTDebtId;
        address owner;
        address bidder;
        uint256 debtAmount;
        uint256 interest;
        BidStatus status;
    }

    // event

    // modifier
    modifier onlyOwner{
        require(msg.sender==OWNER,"NOT AN OWNER");
        _;
    }


    // function
    constructor(uint256 _marketcommission){
        OWNER = msg.sender;
        marketcommission = _marketcommission;
    }

    function changeMarketCommission(uint256 _newCommission) external onlyOwner{
        marketcommission = _newCommission;
    }

    function calculateCommission(uint256 _amount) internal returns(uint256) {
        uint256 amount = (_amount * marketcommission)/100;
        return amount;
    }

    function calculateTotalDebt(uint256 _amount,uint256 _interest) internal returns(uint256) {
        uint256 amount = _amount + (_amount * _interest)/100;
        return amount;
    }

    function AddNewNFT(
        address _nftAddress,
        address _nftCollectionAddress,
        uint256 _tokenId,
        uint256 _interestAmount,
        uint256 _interestPercent,
        uint256 _returnTime,
        uint256 _numberOfBids) public payable{

        require(msg.sender == IERC721(_nftCollectionAddress).ownerOf(_tokenId),"Invalid owner");
        require(msg.value == calculateCommission(_interestAmount),"PERFECT Commission NOT SENT");

        // IERC721(_nftCollectionAddress).approve(address(this),)
        NFTDebt memory newNFTDebt =  NFTDebt(
            NFTDebtCounter,
            msg.sender,
            address(this),
            _nftAddress,
            _nftCollectionAddress,
            _tokenId,
            _interestAmount,
            _interestPercent,
            _returnTime,
            _numberOfBids,
            DebtStatus.ACTIVE
        );
        NFTDebtList[NFTDebtCounter] = newNFTDebt;
        NFTDebtCounter+=1;
    }


    function numberOfBidsForThisNFT(uint256 _NFTDebtId) public returns(uint256){
        uint256 thisCounter = 0;
        for(uint256 i=0;i<NFTBidCounter;i++){
            if(NFTBidList[i].NFTDebtId == _NFTDebtId){
                thisCounter+=1;
            }
        }
        return thisCounter;
    }

    function newBid(
        uint256 _NFTDebtId,
        uint256 _interest
    ) external payable {
        require(NFTDebtList[_NFTDebtId].status == DebtStatus.ACTIVE,"BID IS NOT ACTIVE");
        require(NFTDebtList[_NFTDebtId].numberOfBids >= numberOfBidsForThisNFT(_NFTDebtId) ,"Max number of accepted bid reached");

        NFTBid memory newNFTbid = NFTBid(
            NFTDebtCounter,
            _NFTDebtId,
            NFTDebtList[_NFTDebtId].owner,
            msg.sender,
            msg.value,
            _interest,
            BidStatus.ACTIVE
        );
        NFTBidList[NFTDebtCounter] = newNFTbid;
        NFTDebtCounter+=1;
    }

    function removeBid(uint256 _bidId) external {
        require(NFTBidList[_bidId].status == BidStatus.ACTIVE,"BID IS NOT ACTIVE");
        require(NFTBidList[_bidId].bidder == msg.sender,"NOT AN OWNER");
        NFTBidList[_bidId].status == BidStatus.REMOVED;
        payable(msg.sender).transfer(NFTBidList[_bidId].debtAmount);
    }


    function sendAllBidAmountBack(uint256 _NFTDebtId) private {
        for(uint256 i=0; i<NFTBidCounter;i++){
            if(NFTBidList[i].NFTDebtId == _NFTDebtId){
                payable(NFTBidList[i].bidder).transfer(NFTBidList[i].debtAmount);
            }

        }
    }


    function removeNFT(uint256 _NFTDebtId) external {
        require(NFTDebtList[_NFTDebtId].status == DebtStatus.ACTIVE,"NFT is not active");
        require(NFTDebtList[_NFTDebtId].owner == msg.sender,"Not the owner");
        sendAllBidAmountBack(_NFTDebtId);
        NFTDebtList[_NFTDebtId].status = DebtStatus.REMOVED;
        IERC721(NFTDebtList[_NFTDebtId].NFTAddress).transferFrom(address(this),NFTDebtList[_NFTDebtId].owner,NFTDebtList[_NFTDebtId].tokenId);
    }

    function acceptBid(uint256 _bidId) external {
        require(NFTBidList[_bidId].status == BidStatus.ACTIVE,"BID IS NOT ACTIVE");
        require(NFTBidList[_bidId].owner == msg.sender,"NOT AN OWNER");
        NFTBidList[_bidId].status = BidStatus.ACCEPTED;
        NFTDebtList[NFTBidList[_bidId].NFTDebtId].status = DebtStatus.DEBT;
        NFTDebtList[NFTBidList[_bidId].NFTDebtId].DebtAmount = NFTBidList[_bidId].debtAmount;
        NFTDebtList[NFTBidList[_bidId].NFTDebtId].interest = NFTBidList[_bidId].interest;
        NFTDebtList[NFTBidList[_bidId].NFTDebtId].returnTime = block.timestamp + NFTDebtList[NFTBidList[_bidId].NFTDebtId].returnTime days;
        payable(NFTBidList[_bidId].owner).transfer(NFTBidList[_bidId].debtAmount);
    }

    function payDebt(uint256 _NFTDebtId) payable public {
        require(NFTDebtList[_NFTDebtId].status == DebtStatus.DEBT,"NFT is not in debt");
        require(NFTDebtList[_NFTDebtId].owner == msg.sender,"NFT is not in debt");
        require(NFTDebtList[_NFTDebtId].returnTime > block.timestamp,"Debt is not due");
        require(calculateTotalDebt(NFTDebtList[_NFTDebtId].debtAmount,NFTDebtList[_NFTDebtId].interest) == msg.value,"NFT is not in debt");
        payable(NFTDebtList[_NFTDebtId].lender).transfer(msg.value);
        NFTDebtList[_NFTDebtId].status = DebtStatus.SUCCESS;
        IERC721(NFTDebtList[_NFTDebtId].NFTAddress).transferFrom(address(this),NFTDebtList[_NFTDebtId].owner,NFTDebtList[_NFTDebtId].tokenId);
    }


}