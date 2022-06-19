const AddressCompress = ({ address }) => {
    const splitAddress = address?.substr(0, 6) + `....` + address?.substr(address.length - 5, address.length - 1)
    return <div>{splitAddress}</div>
  };
  
export default AddressCompress;