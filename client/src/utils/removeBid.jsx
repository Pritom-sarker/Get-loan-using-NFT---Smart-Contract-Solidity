
const RemoveBid = () => {
  return (
    <>
        <div className="form-group">
            <label for="bidID">Remove Bid</label>
            <input type="text" className="form-control my-3" id="_bidId" placeholder="Bid ID" />
            <button className="my-btn">Remove Bid</button>
        </div>
    </>
  );
};

export default RemoveBid;
