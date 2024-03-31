import React from "react";
import { useProducts } from "../context/ProductContext";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
            <div>{product.price}$</div>
            <br />
          </div>
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
