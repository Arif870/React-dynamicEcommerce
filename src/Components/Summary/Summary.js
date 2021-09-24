import "./Summary.css";
const Summary = props => {
  const details = props.summery;
  let count = 0;
  for (const pro of details) {
    count = count + pro.price;
  }
  let shipping = 30;
  let totalBeforeTex = count + shipping;
  let estimatedeTex = (count * 10) / 100;
  let totalShopping = totalBeforeTex + estimatedeTex;
  return (
    <div className="summary">
      <h1>Total Order Summery</h1>
      <h4>Total items in Cart : {props.summery.length}</h4>

      <div className="summary-content">
        <div className="name">
          <p>Items total Price : </p>
          <p>Shipping : </p>
          <p>Total before Tax : </p>
          <p>Estimated Tax : </p>
          <p>Total Shopping : </p>
        </div>
        <div className="price">
          <p>$ {count.toFixed(2)}</p>
          <p>$ {shipping.toFixed(2)}</p>
          <p>$ {totalBeforeTex.toFixed(2)}</p>
          <p>$ {estimatedeTex.toFixed(2)}</p>
          <p>$ {totalShopping.toFixed(2)}</p>
        </div>
      </div>
      <button>Place Order</button>
    </div>
  );
};
export default Summary;
