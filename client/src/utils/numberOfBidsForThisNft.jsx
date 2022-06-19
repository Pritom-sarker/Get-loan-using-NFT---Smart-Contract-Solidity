import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import useNumberOfBidsForThisNFT from "../hooks/useNumberOfBidsForThisNFT"

const NumberOfBidsForThisNft = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [nFTDebtId, setNFTDebtId] = useState('');
  const [numberOfBidsForThisNFT, { data, error }] = useNumberOfBidsForThisNFT();
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    numberOfBidsForThisNFT(nFTDebtId);
  }
  console.log(data)
  return (
    <>
      <button onClick={showModal} data-backdrop="false" className="my-btn">Number Of Bids For This NFT</button>
      <Modal show={isOpen} onHide={hideModal} contentClassName="modal-width" backdrop={false}>
        <Modal.Header closeButton>
        <label for="bidID">Number Of Bids For This NFT</label>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
              <input type="text" className="form-control my-3" id="_NFTDebtId" placeholder="NFT Debt ID" value={nFTDebtId} onChange={e => setNFTDebtId(e.target.value)}/>
              <button className="my-btn" onClick={handleSubmit}>Number Of Bids For This NFT</button>
          </div>
          {error && (
            <div class="alert alert-danger my-2" role="alert">
             Sorry. Action Failed.
          </div>
          )}
          {data ? (
            <div class="alert alert-success my-2" role="alert">
              Action Successful
            </div>
          ):null}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NumberOfBidsForThisNft;
