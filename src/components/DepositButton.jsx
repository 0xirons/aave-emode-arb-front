import * as React from "react";
import "./DepositButton.css";
const DepositButton = (props) => {
  return (
    <div className={`deposit-button ${props.className || ""}`}>
      <span className="eth">{props.eth || "Deposit: ..."}</span>
    </div>
  );
};
export default DepositButton;
