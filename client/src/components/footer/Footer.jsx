import React from "react";
import Logo from "../../assets/image/logo.svg";
// internall imports
import "./footer.css";


export default function Footer() {
  return (
    <div className="footer">
      <div className="upperFooter">
        <div className="leftF">
          <img src={Logo} alt="" className="footerLogo" />
          <br />
          <h6 className="footerTitle">Get the lastes Updates</h6>
          <div className="search footerSeach">
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <i className="fa-solid fa-paper-plane"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Your email"
              />
            </div>
          </div>
        </div>
        <div className="middleF">
          <h6 className="footerTitle">CryptoKet</h6>
          <ul className="footerUl">
            <li>Explore</li>
            <li>How it works</li>
            <li>Contract Us</li>
          </ul>
        </div>
        <div className="rightF">
          <h6 className="footerTitle">Support</h6>
          <ul className="footerUl">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="downFooter">
        <div className="downFl">
          <p>CrpytoKet, Inc. All Rights Reserved</p>
        </div>
        <div className="downFR">
          <ul className="footerIcons">
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>{" "}
              </a>
            </li>
            <li>
              <a href="#">
                {" "}
                <i className="fa-solid fa-paper-plane"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-discord"></i>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
