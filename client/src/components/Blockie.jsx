import Blockies from "react-blockies";
import { useMoralis } from "react-moralis";

function Blockie(props) {
  const { account, isAuthenticated } = useMoralis();
  if (!props.address && (!account || !isAuthenticated))
    return <h1>skeleton here</h1>

  return (
    <Blockies
      seed={
        props.currentWallet
          ? account.toLowerCase()
          : props.address.toLowerCase()
      }
      className="rounded-circle"
      {...props}
    />
  );
}

export default Blockie;
