import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import useChangeMarketCommission from "../hooks/useChangeMarketCommission"

const ChangeMarketCommission = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [newCommission, setNewCommission] = useState('');
  const [changeMarketCommission, { data, error }] = useChangeMarketCommission();
  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = () => {
    changeMarketCommission(newCommission);
  }
  
  return (
    <>
      <button onClick={showModal} data-backdrop="false" className="my-btn">Change Market Commission</button>
      <Modal show={isOpen} onHide={hideModal} contentClassName="modal-width" backdrop={false}>
        <Modal.Header closeButton>
          <label for="bidID">Change Market Commission</label>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
              <input type="text" className="form-control my-3" id="_newCommission" placeholder="New Commission" value={newCommission} onChange={e => setNewCommission(e.target.value)}/>
              <button className="my-btn" onClick={handleSubmit}>Change Market Commission</button>
          </div>
          {error && (
            <div class="alert alert-danger my-2" role="alert">
              Sorry. Action Failed.
          </div>
          )}
          {data ? (
            <div class="alert alert-success my-2" role="alert">
              Market Commission Is Changed
            </div>
          ):null}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChangeMarketCommission;
