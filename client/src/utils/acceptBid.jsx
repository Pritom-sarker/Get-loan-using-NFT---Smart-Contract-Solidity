import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import useAcceptBid from "../hooks/useAcceptBid"
const AcceptBid = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [bidID, setBidID] = useState('');
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  const [acceptBid, { data, error }] = useAcceptBid();
  const handleSubmit = () => {
    acceptBid(bidID);
  }

  return (
    <>
      <button onClick={showModal} data-backdrop="false" className="my-btn">Accept BID</button>
      <Modal show={isOpen} onHide={hideModal} contentClassName="modal-width" backdrop={false}>
        <Modal.Header closeButton>
        <label for="bidID">Accept BID</label>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
              <input type="text" className="form-control my-3" id="_bidId" placeholder="Bid id" value={bidID} onChange={e => setBidID(e.target.value)}/>
              <button className="my-btn" onClick={handleSubmit}>Accept Bid</button>
          </div>
          {error && (
            <div class="alert alert-danger my-2" role="alert">
              Sorry. Action Failed.
          </div>
          )}
          {data ? (
            <div class="alert alert-success my-2" role="alert">
              Bid Has Been Accepted
            </div>
          ):null}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AcceptBid;
