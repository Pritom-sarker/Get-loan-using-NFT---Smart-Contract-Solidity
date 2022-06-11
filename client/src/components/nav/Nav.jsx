import React, { useState } from "react";
import { useMoralis } from "react-moralis";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.svg";
import "./nav.css";


export default function Nav() {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const [toggleButton, setToggleButton] = useState("hideNav");

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
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/roadmap">Roadmap</Link>
                </li>
                <li>
                  <button className="my-btn mybtnMobile">Create</button>
                  &nbsp;&nbsp;
                  {isAuthenticated ? (
                    <button className="my-btn" onClick={() => logout()}>Logout</button>
                  ) : (
                    <button className="my-btn" onClick={() => authenticate()}>Connect</button>
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
