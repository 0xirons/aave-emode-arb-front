import * as React from "react";
import "./REthFrame.css";
import rEth from "../assets/rEth.png";
const REthFrame = (props) => {
  return (
    <div className={`r-eth-frame-1 ${props.className || ""}`}>
      <img className="r-eth-1-1" src={rEth} />
      <span>{props.rEth || "rETH"}</span>
    </div>
  );
};
export default REthFrame;
