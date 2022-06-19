import React from "react";

import axios from 'axios';

import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { cardData } from "../home/data";
import useFetchNft from "../../hooks/useFetchNft";
import girl from "../../assets/image/girl.png";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";

import "./user.css";

const User = () => {
  const { data } = useFetchNft();
    return (
    <>
     <div className="userLanding">
        <div className="userSection">
          <img src={girl} className="userImaga" />
            <h3>Mia Ayana</h3>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="userSearch ">
              <div className="search userSearch">
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Item Here"
                  />
                </div>
              </div>
              <select
                className="form-select filtering"
                aria-label="Default select example"
                defaultValue="recent"
              >
                <option value="recent">Recently used</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <br />
            <h1 className="titls">Items</h1>
            <div className="allCards usersAllCards">
              {data.map((nft, index) => (
                <Link to="/nft"
                key={index}>
                  <Card nftData={nft} />
                </Link>
              ))}
            </div>
            <div className="loadMore">
              <button>Load More</button>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;