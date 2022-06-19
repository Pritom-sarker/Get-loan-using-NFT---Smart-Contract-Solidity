
const NewBid = () => {
  return (
    <>
        <div className="form-group">
            <label for="bidID">New Bid</label>
            <input type="text" className="form-control my-3" id="_debtID" placeholder="Debt id" />
            <input type="text" className="form-control my-3" id="_interest" placeholder="Interest" />
            <button className="my-btn">New Bid</button>
        </div>
    </>
  );
};

export default NewBid;
