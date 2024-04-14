import React from "react";
import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

function SideBar({ setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: category }));

    if (tagName !== "LI") return;
  };
  return (
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
  );
}

export default SideBar;
