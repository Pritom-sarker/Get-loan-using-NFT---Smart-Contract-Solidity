import { useState } from "react";
import useContract from "./useContract";

const useChangeEntryFee = () => {
  const { contract } = useContract();
  const [data, setData] = useState();
  const [error, setError] = useState();

  const changeEntryFee = async (_entryFee) => {
    try {
      const response = await contract.changeEntryFee(_entryFee);
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return [changeEntryFee, { data, error }];
};

export default useChangeEntryFee;
