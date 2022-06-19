import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.svg";
import { getEllipsisTxt } from "../../helpers/formatters";
import Address from "../Address/Address";
import Blockie from "../Blockie";
import "./modal.css";
import "./nav.css";

const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "rgb(244, 244, 244)",
    cursor: "pointer",
  },
  text: {
    color: "#21BF96",
    marginBottom: "0px"
  },
  connector: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "20px 5px",
    cursor: "pointer",
  },
  icon: {
    alignSelf: "center",
    fill: "rgb(40, 13, 95)",
    flexShrink: "0",
    marginBottom: "8px",
    height: "30px",
  },
}

export default function Nav() {
  const { authenticate, isAuthenticated, account, logout } = useMoralis();
  const [toggleButton, setToggleButton] = useState("hideNav");
  const [modal, setModal] = useState(false);
 

  window.onscroll = function () {
    const navi = document.querySelector(".navSection");
    let height = window.pageYOffset;
    if (height >= 10) navi.classList.add("secondNav");
    else navi.classList.remove("secondNav");
  };


  return (
    <>
      <div className="navSection">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="Mymenubar">
                <button
                  className="hideMenu"
                  onClick={() => setToggleButton("showNav")}
                >
                  <i className="fa-solid fa-bars"></i>
                </button>
                <Link to="/">
                  <img src={Logo} alt="Logo" className="logoImg" />
                </Link>
                <div className="search">
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
              </div>
            </div>
            <div className="col-md-6">
              <ul className={`navigation ${toggleButton}`}>
                <span
                  className="hideNavigation"
                  onClick={() => setToggleButton("hideNav")}
                ></span>
                <li>
                  <Link to="/user">User</Link>
                </li>
                <li>
                  <Link to="/nft">NFT</Link>
                </li>
                <li>
                  <Link to="/team">Team</Link>
                </li>
                <li>
                  <Link to="/roadmap">Roadmap</Link>
                </li>
                    {modal && (
                      <div id="myModal" className="modal">
                      <div className="modal-content">
                        <span style={{ textAlign: "end" }} className="close" onClick={() => setModal(false)}>&times;</span>
                        <Address
                            avatar="left"
                            size={6}
                            copyable
                            style={{ fontSize: "20px" }}
                          />
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={async () => {
                            await logout();
                            setModal(false);
                          }}
                        >
                          Disconnect Wallet
                        </button>
                      </div>
                    </div>
                    )}
                <li>
                  { account && (
                    <a href="/create" className="my-btn mybtnMobile btnColor">Create</a>
                  )}
                </li>
                <li>
                  {!isAuthenticated || !account ? (
                    <button 
                      className="my-btn" 
                      onClick={async () => {
                        try {
                          await authenticate({ provider: "injected" });
                          window.localStorage.setItem("connectorId", "injected");
                        } catch (e) {
                          console.error(e);
                        }
                      }}
                    >
                      Connect
                    </button>
                    ) : (
                    <div style={styles.account} onClick={() => setModal(true)}>
                      <p style={{ marginRight: "5px", ...styles.text }}>
                        {getEllipsisTxt(account, 6)}
                      </p>
                      <Blockie currentWallet scale={3} />
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
