// const alchemyKey =
//   "wss://eth-goerli.g.alchemy.com/v2/UA3nKbX-hyplDc1epDrXrmD54L2e_1AR";
// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// const web3 = createAlchemyWeb3(alchemyKey);

// const contractABI = [
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "initMessage",
//         type: "string",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "string",
//         name: "oldStr",
//         type: "string",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "newStr",
//         type: "string",
//       },
//     ],
//     name: "UpdatedMessages",
//     type: "event",
//   },
//   {
//     inputs: [],
//     name: "message",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "newMessage",
//         type: "string",
//       },
//     ],
//     name: "update",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ]; //normally it's like that: require("../contract-abi.json");

//const contractAddress = "0x20c10F6bAB2bafEEe8f9986A2A295271F01Be65b";

//Alchemy is only useful here to fetch the contract online

// export const helloWorldContract = new web3.eth.Contract(
//   contractABI,
//   contractAddress
// );

// export const loadCurrentMessage = async () => {
//   const message = await helloWorldContract.methods.message().call(); //these functions come from Alchemy
//   return message;
// };

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              You must install Metamask, a virtual Ethereum wallet, in your
              browser.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
        };
      } else {
        return {
          address: "",
        };
      }
    } catch (err) {
      return {
        address: "",
      };
    }
  } else {
    return {
      address: "",
    };
  }
};

// export const updateMessage = async (address, message) => {
//   //input error handling
//   if (!window.ethereum || address === null) {
//     return {
//       status:
//         "💡 Connect your Metamask wallet to update the message on the blockchain.",
//     };
//   }

//   if (message.trim() === "") {
//     return {
//       status: "❌ Your message cannot be an empty string.",
//     };
//   }
//   //set up transaction parameters
//   const transactionParameters = {
//     to: contractAddress, // Required except during contract publications.
//     from: address, // must match user's active address.
//     data: helloWorldContract.methods.update(message).encodeABI(),
//   };

//   //sign the transaction
//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       status: (
//         <span>
//           ✅{" "}
//           <a target="_blank" href={`https://goerli.etherscan.io/tx/${txHash}`}>
//             View the status of your transaction on Etherscan!
//           </a>
//           <br />
//           ℹ️ Once the transaction is verified by the network, the message will
//           be updated automatically.
//         </span>
//       ),
//     };
//   } catch (error) {
//     return {
//       status: "😥 " + error.message,
//     };
//   }
// };
