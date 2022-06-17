import { useState } from "react";
import useContract from "./useContract";

const useRedeemNFT = () => {
  const { contract } = useContract();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const redeemNFT = async (_NFTDebtId) => {
    try {
      const response = await contract.redeemNFT(_NFTDebtId);
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return [redeemNFT, { data, error }];
};

export default useRedeemNFT;
