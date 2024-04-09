import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";

import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import LoaderSpinner from "../components/LoaderSpinner";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setDisplayed(products);
  }, [products]);

  const handleSearch = () => {
    console.log("search");
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    console.log(category, tagName);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={handleSearch}>
          <ImSearch />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="w-full flex  flex-wrap justify-between">
          {!displayed.length && <LoaderSpinner />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl /> <p>Categories</p>
          </div>
          <ul onClick={categoryHandler} className="[&>li]:cursor-pointer">
            <li>All</li>
            <li>Electronics</li>
            <li>Jewelery</li>
            <li>Men's Clothing</li>
            <li>Women's Clothing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
