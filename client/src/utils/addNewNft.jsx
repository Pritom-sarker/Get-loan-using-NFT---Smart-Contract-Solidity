import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import useAddNewNft from "../hooks/useAddNewNft"

const AddNewNft = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [nftAddress, setNftAddress] = useState('');
  const [nftCollectionAddress, setNftCollectionAddress] = useState('');
  const [tokenId, setTokenId] = useState('');
  const [interestAmount, setInterestAmount] = useState('');
  const [interestPercent, setInterestPercent] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [numberOfBids, setNumberOfBids] = useState('');
  const [AddNewNFT, { data, error }] = useAddNewNft();
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    AddNewNFT(nftAddress,nftCollectionAddress,tokenId,interestAmount,interestPercent,returnTime,numberOfBids);
  }

  return (
    <>
      <button onClick={showModal} data-backdrop="false" className="my-btn">Add New NFT</button>
      <Modal show={isOpen} onHide={hideModal} contentClassName="modal-width" backdrop={false}>
        <Modal.Header closeButton>
          <label for="bidID">Add New NFT</label>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
              <input type="text" className="form-control my-3" id="_nftAddress" placeholder="NFT Address"  value={nftAddress} onChange={e => setNftAddress(e.target.value)}/>
              <input type="text" className="form-control my-3" id="_nftCollectionAddress" placeholder="NFT Collection Address" value={nftCollectionAddress} onChange={e => setNftCollectionAddress(e.target.value)}/>
              <input type="text" className="form-control my-3" id="_tokenId" placeholder="Token ID" value={tokenId} onChange={e => setTokenId(e.target.value)}/>
              <input type="text" className="form-control my-3" id="_interestAmount" placeholder="Interest Amount" value={interestAmount} onChange={e => setInterestAmount(e.target.value)}/>
              <input type="text" className="form-control my-3" id="_interestPercent" placeholder="Interest %" value={interestPercent} onChange={e => setInterestPercent(e.target.value)}/>
              <input type="text" className="form-control my-3" id="_returnTime" placeholder="Return Time" value={returnTime} onChange={e => setReturnTime(e.target.value)}/>
              <input type="text" className="form-control my-3" id="_numberOfBids" placeholder="Number Of Bids" value={numberOfBids} onChange={e => setNumberOfBids(e.target.value)}/>
              <button className="my-btn" onClick={handleSubmit}> Add New NFT</button>
          </div>
          {error && (
            <div class="alert alert-danger my-2" role="alert">
              Sorry. Action Failed.
          </div>
          )}
          {data ? (
            <div class="alert alert-success my-2" role="alert">
              New NFT Has Been Added.
            </div>
          ):null}
        </Modal.Body>
      </Modal>
        
    </>
  );
};

export default AddNewNft;
