import { useState } from "react";
import useContract from "./useContract";

const useNewBid = () => {
  const { contract } = useContract();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const newBid = async (_debtID, _interest) => {
    try {
      const response = await contract.newBid(_debtID, _interest);
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return [newBid, { data, error }];
};

export default useNewBid;
