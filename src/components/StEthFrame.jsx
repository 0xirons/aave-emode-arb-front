import * as React from "react";
import "./StEthFrame.css";
import stEthLogo from "../assets/stEthLogo.png";
const StEthFrame = (props) => {
  return (
    <div className={`st-eth-frame ${props.className || ""}`}>
      <img className="st-eth-logo-1" src={stEthLogo} />
      <span>{props.stEth || "stETH"}</span>
    </div>
  );
};
export default StEthFrame;
