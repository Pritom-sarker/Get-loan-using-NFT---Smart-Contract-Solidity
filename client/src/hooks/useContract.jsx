import React, { useState } from "react";
import { ethers } from "ethers";

const abi = require("./Debt.json");
const contractAddress = String(process.env.REACT_APP_DEPLOYED_DEBT_ADDRESS);

const useContract = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://localhost:8545"
  );
  const signer = provider.getSigner();
  const contract = new ethers.Contract(contractAddress, abi, signer);

  return { signer, provider, contract };
};

export default useContract;
