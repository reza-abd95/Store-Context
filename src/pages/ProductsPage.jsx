import React from "react";
import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className="flex justify-between">
      <div className="w-full flex  flex-wrap justify-between">
        {!products.length && <p>loading ...</p>}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
