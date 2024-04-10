import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { FaListUl } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import LoaderSpinner from "../components/LoaderSpinner";

import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";

function ProductsPage() {
  const products = useProducts();

  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const handleSearch = () => {
    setQuery((query) => createQueryObject(query, { search: search }));
    setSearch("");
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: category }));

    if (tagName !== "LI") return;
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
