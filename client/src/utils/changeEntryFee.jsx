import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import useChangeEntryFee from "../hooks/useChangeEntryFee"

const ChangeEntryFee = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [entryFee, setEntryFee] = useState('');
  const [changeEntryFee, { data, error }] = useChangeEntryFee();
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    changeEntryFee(entryFee);
  }

  
  return (
    <>
      <button onClick={showModal} data-backdrop="false" className="my-btn">Change Entry Fee</button>
      <Modal show={isOpen} onHide={hideModal} contentClassName="modal-width" backdrop={false}>
        <Modal.Header closeButton>
          <label for="bidID">Change Entry Fee</label>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
              <input type="text" className="form-control my-3" id="_entryFee" placeholder="Entry Fee" value={entryFee} onChange={e => setEntryFee(e.target.value)}/>
              <button className="my-btn" onClick={handleSubmit}>Change Entry Fee</button>
          </div>
          {error && (
            <div class="alert alert-danger my-2" role="alert">
              Sorry. Action Failed.
          </div>
          )}
          {data ? (
            <div class="alert alert-success my-2" role="alert">
              Entry Fee Has Been Changed.
            </div>
          ):null}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChangeEntryFee;
