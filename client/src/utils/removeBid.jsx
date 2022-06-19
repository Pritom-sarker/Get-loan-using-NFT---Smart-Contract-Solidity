import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import useRemoveBid from "../hooks/useRemoveBid"

const RemoveBid = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [bidId, setBidId] = useState('');
  const [removeBid, { data, error }] = useRemoveBid();
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    removeBid(bidId);
  }

  return (
    <>
        
      <button onClick={showModal} data-backdrop="false" className="my-btn">Remove Bid</button>
      <Modal show={isOpen} onHide={hideModal} contentClassName="modal-width" backdrop={false}>
        <Modal.Header closeButton>
          <label for="bidID">Remove Bid</label>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
                <input type="text" className="form-control my-3" id="_bidId" placeholder="Bid ID" value={bidId} onChange={e => setBidId(e.target.value)} />
                <button className="my-btn" onClick={handleSubmit}>Remove Bid</button>
          </div>
          {error && (
            <div class="alert alert-danger my-2" role="alert">
             Sorry. Action Failed.
          </div>
          )}
          {data ?(
            <div class="alert alert-success my-2" role="alert">
              Successfully Removed Bid
            </div>
          ):null}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RemoveBid;
