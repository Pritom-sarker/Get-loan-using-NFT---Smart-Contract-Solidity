
const AddNewNft = () => {
  return (
    <>
        <div className="form-group">
          <label for="bidID">Add New NFT</label>
            <input type="text" className="form-control my-3" id="_nftAddress" placeholder="NFT Address" />
            <input type="text" className="form-control my-3" id="_nftCollectionAddress" placeholder="NFT Collection Address" />
            <input type="text" className="form-control my-3" id="_tokenId" placeholder="Token ID" />
            <input type="text" className="form-control my-3" id="_interestAmount" placeholder="Interest Amount" />
            <input type="text" className="form-control my-3" id="_interestPercent" placeholder="Interest %" />
            <input type="text" className="form-control my-3" id="_returnTime" placeholder="Return Time" />
            <input type="text" className="form-control my-3" id="_numberOfBids" placeholder="Number Of Bids" />
            <button className="my-btn">Add New NFT</button>
        </div>
    </>
  );
};

export default AddNewNft;
