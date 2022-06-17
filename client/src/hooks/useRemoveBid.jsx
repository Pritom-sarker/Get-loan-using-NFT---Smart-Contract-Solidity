import { useState } from "react";
import useContract from "./useContract";

const useRemoveBid = () => {
  const { contract } = useContract();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const removeBid = async (_bidId) => {
    try {
      const response = await contract.removeBid(_bidId);
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return [removeBid, { data, error }];
};

export default useRemoveBid;
