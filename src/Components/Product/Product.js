import Rating from "react-rating";
import "./Product.css";
let Product = props => {
  console.log(props);
  let { name, img, category, star, price, stock } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="content">
        <h1>{name}</h1>
        <small>Category : {category}</small>
        <br />
        <small className="stock">{stock} products in stock &#128522;</small>
        <p>
          <Rating
            readonly
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            initialRating={star}
          />
        </p>
        <h2> ${price}</h2>

        <button onClick={() => props.handleAddToCart(props.product)}>
          Add to Cart <i className="fas fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
