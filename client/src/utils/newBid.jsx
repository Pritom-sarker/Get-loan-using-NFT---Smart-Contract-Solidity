import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import useNewBid from "../hooks/useNewBid"

const NewBid = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [debtID, setDebtID] = useState('');
  const [interest, setInterest] = useState('');
  const [newBid, { data, error }] = useNewBid();
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    newBid(debtID, interest);
  }
  console.log(data)
  return (
    <>
      <button onClick={showModal} data-backdrop="false" className="my-btn">New Bid</button>
      <Modal show={isOpen} onHide={hideModal} contentClassName="modal-width" backdrop={false}>
        <Modal.Header closeButton>
          <label for="bidID">New Bid</label>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <input type="text" className="form-control my-3" id="_debtID" placeholder="Debt id" value={debtID} onChange={e => setDebtID(e.target.value)}/>
            <input type="text" className="form-control my-3" id="_interest" placeholder="Interest" value={interest} onChange={e => setInterest(e.target.value)}/>
            <button className="my-btn" onClick={handleSubmit}>New Bid</button>
          </div>
          {error && (
            <div class="alert alert-danger my-2" role="alert">
              Sorry. Action Failed.
          </div>
          )}
          {data ? (
            <div class="alert alert-success my-2" role="alert">
              New Bid Added
            </div>
          ):null}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewBid;
