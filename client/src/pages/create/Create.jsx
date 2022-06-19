import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import "./create.css";
import Modal from "react-bootstrap/Modal";
import AcceptBid from "../../utils/acceptBid"
import AddNewNft from "../../utils/addNewNft"
import ChangeEntryFee from "../../utils/changeEntryFee"
import ChangeMarketCommission from "../../utils/changeMarketCommission"
import NewBid from "../../utils/newBid"
import NumberOfBidsForThisNft from "../../utils/numberOfBidsForThisNft"
import PayDebt from "../../utils/payDebt"
import RedeemNFT from "../../utils/redeemNFT"
import RemoveBid from "../../utils/removeBid"
import RemoveNFT from "../../utils/removeNFT"

const Create = () => {
  
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="productMain">
              
              <div className="container">
              <div className="row">
                <div className="col my-2"><AcceptBid /></div>
                  <div className="col my-2"><AddNewNft /></div>
                  
                  <div className="w-100"></div>
                  <div className="col my-2"><ChangeEntryFee /></div>
                  <div className="col my-2"><ChangeMarketCommission /></div>
                  <div className="w-100"></div>
                  <div className="col my-2"><NewBid /></div>
                  <div className="col my-2"><NumberOfBidsForThisNft /></div>
                  <div className="w-100"></div>
                  <div className="col my-2"><PayDebt /></div>
                  <div className="col my-2"><RedeemNFT /></div>
                  
                  <div className="w-100"></div>
                  <div className="col my-2"><RemoveBid /></div>
                  <div className="col my-2"><RemoveNFT /></div>

              </div>
            </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
