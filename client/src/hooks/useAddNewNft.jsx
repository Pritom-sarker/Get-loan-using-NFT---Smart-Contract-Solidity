import { useState } from "react";
import useContract from "./useContract";

const useAddNewNft = () => {
  const { contract } = useContract();
  const [data, setData] = useState();
  const [error, setError] = useState();
  const AddNewNFT = async (
    _nftAddress,
    _nftCollectionAddress,
    _tokenId,
    _interestAmount,
    _interestPercent,
    _returnTime,
    _numberOfBids
  ) => {
    try {
      const response = await contract.AddNewNFT(
        _nftAddress,
        _nftCollectionAddress,
        _tokenId,
        _interestAmount,
        _interestPercent,
        _returnTime,
        _numberOfBids
      );
      setData(response);
    } catch (error) {
      setError(error);
    }
  };

  return [AddNewNFT, { data, error }];
};

export default useAddNewNft;
