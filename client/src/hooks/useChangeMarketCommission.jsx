import { useState } from "react";
import useContract from "./useContract";

const useChangeMarketCommission = () => {
  const { contract } = useContract();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const changeMarketCommission = async (_newCommission) => {
    try {
      const response = await contract.changeMarketCommission(_newCommission);
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return [changeMarketCommission, { data, error }];
};

export default useChangeMarketCommission;
