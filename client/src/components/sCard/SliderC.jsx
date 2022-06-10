import React from "react";
import "./SliderC.css";

const SliderC = ({ data }) => {
  const { id, img, name, balance } = data;
  return (
    <div className="SlideCard">
      <span className="CardNumber">{id}</span>
      <img src={img} alt="" />
      <h4>{name}</h4>
      <h4>
        <b>{balance}</b> ETH
      </h4>
    </div>
  );
};

export default SliderC;
