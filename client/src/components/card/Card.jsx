import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  const { img, title, balance, reaction } = data;
  return (
    <div className="Card">
      <img src={img} alt="" />
      <h5>{title}</h5>
      <div className="cardFooter">
        <h6>
          <b>{balance}</b> ETH
        </h6>
        <p>
          <i class="fa-solid fa-heart"></i>
          &nbsp;
          <span>{reaction}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
