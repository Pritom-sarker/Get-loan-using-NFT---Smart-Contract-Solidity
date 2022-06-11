import React from "react";
import image from "../../assets/image/abstract.png";
import girl from "../../assets/image/girl.png";
import Footer from "../../components/footer/Footer";
import "./product.css";

const Product = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="productMain">
              <img src={image} alt="" />
              <div className="procuctDetails">
                <h2 className="detailsTitle">
                  Abstract Smoke Red Blue
                  <span>
                    <i className="fa-solid fa-heart"></i> 38
                  </span>
                </h2>
                <p>
                  From <b>4.5 ETH</b> 20 of 25 avaiable
                </p>
                <br />
                <p>Creator</p>
                <div className="crator">
                  <img src={girl} alt="" />
                  <h6>Mia Ayana</h6>
                </div>
                <h5 className="details">Details</h5>
                <p className="peragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
                  corporis dicta commodi odit. Placeat quo reiciendis aspernatur
                  officiis ipsum necessitatibus animi, explicabo cumque ipsam
                  impedit suscipit odit et ipsa eveniet numquam deserunt in!
                  Excepturi odio cumque voluptatibus ipsa alias et obcaecati
                  deserunt? Sed, est. At ut quasi cum nihil in?
                </p>
                <button className="my-btn">Byy for 4.5 ETH</button>
                &nbsp; &nbsp;
                <button className="my-btn">Make Offer</button>
              </div>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
