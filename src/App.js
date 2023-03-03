import * as React from "react";
import "./App.css";
import slider from "./assets/slider.svg";
import rEth from "./assets/rEth.png";
import REthFrame from "./components/REthFrame";
import StEthFrame from "./components/StEthFrame";
import DepositButton from "./components/DepositButton";
const App = () => {
  const propsData = {
    stEthFrame: {
      stEth: "stETH",
    },
    depositButton: {
      eth: "Deposit: ...",
    },
    rEthFrame: {
      rEth: "rETH",
    },
    depositButton1: {
      eth: "Deposit: ...",
    },
    stEthFrame1: {
      stEth: "stETH",
    },
    depositButton2: {
      eth: "Deposit: ...",
    },
    depositButton3: {
      eth: "Deposit: ...",
    },
  };
  return (
    <div className="frame-3">
      <div className="header">
        <span className="surge-finance">Surge Finance</span>
        <div className="panel">
          <div className="select-network">Select Network</div>
          <div className="connect-button">Connect Wallet</div>
        </div>
      </div>
      <div className="select-frame">
        <div className="select-short-frame">
          <span className="select-short-asset">Select Short Asset</span>
          <div className="deposit-frame-1">
            <StEthFrame
              className="st-eth-frame-instance"
              {...propsData.stEthFrame}
            />
            <DepositButton
              className="deposit-button-instance"
              {...propsData.depositButton}
            />
          </div>
          <div className="deposit-frame-2">
            <REthFrame
              className="r-eth-frame-instance-1"
              {...propsData.rEthFrame}
            />
            <DepositButton
              className="deposit-button-1-instance"
              {...propsData.depositButton1}
            />
          </div>
        </div>
        <div className="select-long-frame">
          <span className="select-long-asset">Select Long Asset</span>
          <div className="deposit-frame-1-1">
            <StEthFrame
              className="st-eth-frame-1-instance-1"
              {...propsData.stEthFrame1}
            />
            <DepositButton
              className="deposit-button-2-instance"
              {...propsData.depositButton2}
            />
          </div>
          <div className="deposit-frame-2-1">
            <div className="r-eth-frame">
              <img className="r-eth-1" src={rEth} />
              <span>rETH</span>
            </div>
            <DepositButton
              className="deposit-button-3-instance-1"
              {...propsData.depositButton3}
            />
          </div>
        </div>
      </div>
      <div className="select-leverage-frame">
        <span className="select-leverage">Select Leverage:</span>
        <div className="flex-container">
          <div className="dragger">50</div>
          <img className="slider" src={slider} />
        </div>
      </div>
      <div className="stats-frame">
        <div className="stats-labels">
          <div className="frame-2">
            <div className="collateral-in">Collateral In</div>
            <div className="st-eth-price">stETH Price</div>
            <div className="r-eth-price">rETH Price</div>
            <div className="entry-price">
              <span className="entry-price-1">Entry Price</span>
            </div>
            <div className="liq-price">
              <span className="liq-price-1">Liq. Price</span>
            </div>
            <div className="fees">Fees</div>
          </div>
        </div>
        <div className="data-entry">
          <div className="collateral-in-1">-</div>
          <div className="st-eth-price-1">-</div>
          <div className="r-eth-price-1">-</div>
          <div className="entry-price-2">-</div>
          <div className="liq-price-2">-</div>
          <div className="fees-1">-</div>
        </div>
      </div>
    </div>
  );
};
export default App;
