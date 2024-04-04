import React from "react";
import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import LoaderSpinner from "../components/LoaderSpinner";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className="flex justify-between">
      <div className="w-full flex  flex-wrap justify-between">
        {!products.length && <LoaderSpinner />}
        {products.map((product) => (
          <Card key={product.id} data={product} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
