import { useState } from "react";
import useContract from "./useContract";

const useAcceptBid = () => {
  const { contract } = useContract();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const acceptBid = async (_bidId) => {
    try {
      const response = await contract.acceptBid(_bidId);
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return [acceptBid, { data, error }];
};

export default useAcceptBid;
