import { useState , useEffect } from "react";
import useContract from "./useContract";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import axios from 'axios';

const useFetchNft = () => {
    const { contract } = useContract();
    const [results, setResults] = useState();
    const [error, setError] = useState();
    const Web3Api = useMoralisWeb3Api();
    const { Moralis, user, account } = useMoralis();
    const [data, setData] = useState([]);
    const fetchNft = async () => {
        try {
            const options = {
                chain: "rinkeby",
                address: account,
            };
            const polygonNFTs = await Web3Api.account.getNFTs(options);
            setResults(polygonNFTs.result)
            console.log(results)
            const items = await Promise.all(
                results.map(async (nft) => {
                if (nft.token_uri !== null) {
                    let tempUrl = nft.token_uri;
                    const url = tempUrl.replace("https://ipfs.moralis.io:2053/ipfs/", "https://ipfs.io/ipfs/");
                    const response = await fetch(url);
                    const _json = await response.json();
                    let item = {
                        image: _json.image,
                        name: _json.name,
                        description: _json.description,
                        tokenAddress: nft.token_address,
                        owner: nft.owner_of,
                        symbol: nft.symbol,
                        tokenHash: nft.token_hash,
                      };
                      return item;
                }
            }))
            setData(items)
            
        } catch (error) {
        setError(error);
        }
    };

    useEffect(() => {
        fetchNft();
    }, [results])

    
  return { data, error };
};

export default useFetchNft;
