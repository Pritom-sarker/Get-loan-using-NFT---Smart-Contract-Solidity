import React from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { Link } from "react-router-dom";
import girl from "../../assets/image/girl.png";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import { cardData } from "../home/data";
import "./user.css";

const User = () => {
  const { Moralis, user, account } = useMoralis();
  const Web3Api = useMoralisWeb3Api();
  
 
  const fetchNFTs = async () => {
    const testnetNFTs = await Web3Api.Web3API.account.getNFTs({
      chain: "rinkeby",
    });
    console.log(testnetNFTs);
    console.log(user.get("ethAddress"))
    console.log(account)
    const options = {
      address: "0x3850494b20ae8ed8c7f699a1a18b1d127245645f",
      chain: "rinkeby",
      token_id: "0",
    };
    const metaData = await Web3Api.token.getNFTMetadata(options);
    console.log(metaData);

  }

  /*
  
  //  <button style={{marginTop: "150px"}} onClick={getNfts}>Refetch NFTBalances</button>
//       <pre>{JSON.stringify(data, null, 2)}</pre>



// const { authenticate, isAuthenticated, user, logout, Moralis } = useMoralis();
    const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();
    
    const getNfts = async () => {
      let xx = await getNFTBalances()
      // console.log(isAuthenticated)
  
      // const options = { address: user.attributes.ethAddress, chain: "Eth" };
      // const metaData = await Moralis.Web3API.account.getNFTs();
      // console.log(metaData)
    }

  // console.log(user.attributes.ethAddress)
  // console.log(isAuthenticated)


  // import { useMoralis, useNFTBalances } from "react-moralis";


  import React from "react";
import { useMoralisWeb3Api } from "react-moralis";

const Web3Api = useMoralisWeb3Api();

const fetchNFTs = async () => {
  // get NFTs for current user on Mainnet
  const userEthNFTs = await Web3Api.account.getNFTs();
  console.log(userEthNFTs);
  // get testnet NFTs for user
  const testnetNFTs = await Web3Api.Web3API.account.getNFTs({
    chain: "goerli",
  });
  console.log(testnetNFTs);

  // get polygon NFTs for address
  const options = {
    chain: "polygon",
    address: "0x75e3e9c92162e62000425c98769965a76c2e387a",
  };
  const polygonNFTs = await Web3Api.account.getNFTs(options);
};
console.log(polygonNFTs);
  */
  return (
    <>
     <div className="userLanding">
        <div className="userSection">
          <img src={girl} className="userImaga" />
          <h3>Mia Ayana</h3>
          <button type="button" onClick={fetchNFTs}>click</button>
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
