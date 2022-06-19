import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import usePayDebt from "../hooks/usePayDebt"

const PayDebt = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [nFTDebtId, setNFTDebtId] = useState('');
  const [payDebt, { data, error }] = usePayDebt();
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    payDebt(nFTDebtId);
  }

  
  return (
    <>
      <button onClick={showModal} data-backdrop="false" className="my-btn">Pay Debt</button>
      <Modal show={isOpen} onHide={hideModal} contentClassName="modal-width" backdrop={false}>
        <Modal.Header closeButton>
          <label for="bidID">Pay Debt</label>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <input type="text" className="form-control my-3" id="_NFTDebtId" placeholder="NFT Debt ID" value={nFTDebtId} onChange={e => setNFTDebtId(e.target.value)}/>
            <button className="my-btn" onClick={handleSubmit}>Pay Debt</button>
          </div>
          {error && (
            <div class="alert alert-danger my-2" role="alert">
              Sorry. Action Failed.
          </div>
          )}
          {data ? (
            <div class="alert alert-success my-2" role="alert">
              Debt Is Paid
            </div>
          ):null}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PayDebt;
