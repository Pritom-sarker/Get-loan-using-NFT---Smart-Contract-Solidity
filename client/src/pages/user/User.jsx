import React from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Link } from "react-router-dom";
import girl from "../../assets/image/girl.png";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import useNewBid from "../../hooks/useNewBid";
import { cardData } from "../home/data";
import "./user.css";

const User = () => {
  const { Moralis, user, account } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  const [newBid, { data }] = useNewBid();
  console.log(data);

  const fetchNFTs = () => {
    newBid(0, 15);
    console.log(data);
  };

  return (
    <>
      <div className="userLanding">
        <div className="userSection">
          <img src={girl} className="userImaga" />
          <h3>Mia Ayana</h3>
          <button type="button" onClick={fetchNFTs}>
            click
          </button>
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
              {cardData.map((val, index) => (
                <Link to="/nft" key={index}>
                  <Card data={val} />
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
