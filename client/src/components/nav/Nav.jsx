import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo.svg";
// internal imports
import "./nav.css";


export default function Nav() {
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
                  <a href="/user">Explore</a>
                </li>
                <li>
                  <a href="/nft">My Items</a>
                </li>
                <li>
                  <a href="/team">Following</a>
                </li>
                <li>
                  <button className="my-btn mybtnMobile">Create</button>
                  &nbsp;&nbsp;
                  <button className="my-btn">Connecet</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
