import { useState } from "react";
import useContract from "./useContract";

const useRemoveNFT = () => {
  const { contract } = useContract();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const removeNFT = async (_NFTDebtId) => {
    try {
      const response = await contract.removeNFT(_NFTDebtId);
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return [removeNFT, { data, error }];
};

export default useRemoveNFT;
