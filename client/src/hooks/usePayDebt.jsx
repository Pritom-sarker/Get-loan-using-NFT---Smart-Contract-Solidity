import { useState } from "react";
import useContract from "./useContract";

const usePayDebt = () => {
  const { contract } = useContract();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const payDebt = async (_NFTDebtId) => {
    try {
      const response = await contract.payDebt(_NFTDebtId);
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return [payDebt, { data, error }];
};

export default usePayDebt;
