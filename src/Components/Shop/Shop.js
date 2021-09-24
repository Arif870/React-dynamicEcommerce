import Product from "../Product/Product";
import "./Shop.css";
import Summary from "../Summary/Summary";
import { useState, useEffect } from "react";

const Shop = () => {
  const [products, setproducts] = useState([]);
  const [summery, setSummery] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then(response => response.json())
      .then(data => setproducts(data));
  }, []);

  const handleAddToCart = product => {
    let newCount = [...summery, product];
    setSummery(newCount);
  };

  return (
    <div className="shop">
      <div>
        <h1>Our latest products</h1>
        {products.map(product => (
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
