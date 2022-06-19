import React from "react";
import "./Card.css";
import  AddressCompress  from "../../utils/AddressCompress";
const Card = ({ nftData }) => {
  if (nftData === undefined)
  {
    return (
      <div>No Data To Show ...</div>
    )  
  } else {
    const { image, name, owner, symbol } = nftData;
    console.log(image)
    return (
      <div className="Card">
        <img src={image} alt="" />
        <h5>{name}</h5>
        <div className="cardFooter">
          <h6>
            <b><AddressCompress address={ owner } /></b>
          </h6>
          <p>
            <i className="fa-solid fa-heart"></i>
            &nbsp;
            <span>{symbol}</span>
          </p>
        </div>
      </div>
    );
  }
  
};

export default Card;
