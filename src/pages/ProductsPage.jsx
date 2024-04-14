import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { FaListUl } from "react-icons/fa";
import LoaderSpinner from "../components/LoaderSpinner";

import { useProducts } from "../context/ProductContext";
import Card from "../components/Card";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

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
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox setSearch={setSearch} search={search} setQuery={setQuery} />
      <div className="flex justify-between">
        <div className="w-full flex  flex-wrap justify-between">
          {!displayed.length && <LoaderSpinner />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <SideBar setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
