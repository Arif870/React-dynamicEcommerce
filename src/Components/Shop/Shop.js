import Product from "../Product/Product";
import "./Shop.css";
import Summary from "../Summary/Summary";
import { useState, useEffect } from "react";
import { addToDb, getStoredCart } from "../../Utilities/LocalStorage";

const Shop = () => {
  const [products, setproducts] = useState([]);
  const [summery, setSummery] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then(response => response.json())
      .then(data => {
        setproducts(data);
        setDisplayProduct(data);
      });
  }, []);

  const handleAddToCart = product => {
    let newCount = [...summery, product];
    setSummery(newCount);

    addToDb(product.key);
  };

  let changeHandaler = e => {
    let searchText = e.target.value;
    let matchedProduct = products.filter(product =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProduct(matchedProduct);
  };

  return (
    <div className="shop">
      <div>
        <div className="search">
          <input
            onChange={changeHandaler}
            placeholder="Search Product"
            type="text"
          />
          <button>Search</button>
        </div>
        {displayProduct.map(product => (
          <Product
            product={product}
            key={product.key}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <Summary summery={summery} />
    </div>
  );
};

export default Shop;
