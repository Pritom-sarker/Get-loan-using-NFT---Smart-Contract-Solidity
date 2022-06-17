import { useState } from "react";
import useContract from "./useContract";

const useNumberOfBidsForThisNFT = () => {
  const { contract } = useContract();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const numberOfBidsForThisNFT = async (_NFTDebtId) => {
    try {
      const response = await contract.numberOfBidsForThisNFT(_NFTDebtId);
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return [numberOfBidsForThisNFT, { data, error }];
};

export default useNumberOfBidsForThisNFT;
