import React from "react";
import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";
import { categories } from "../constants/list";

function SideBar({ query, setQuery }) {
  const categoryHandler = (e) => {
    const { tagName } = e.target;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category: category }));

    if (tagName !== "LI") return;
  };
  return (
    <div className="w-64 h-fit text-lg ml-7 m-3 p-5 border-2 border-dashed border-[#e2e2e2] rounded-2xl">
      <div className="flex items-center mb-2 text-red-500 font-medium">
        <FaListUl /> <p className="ml-2">Categories</p>
      </div>
      <ul
        onClick={categoryHandler}
        className="[&>li]:cursor-pointer [&>li]:p-1 [&>li]:list-none [&>li:hover]:text-red-500 "
      >
        {categories.map((item) => (
          <li
            className={
              item.type.toLowerCase() == query.category
                ? "border-2 border-dashed border-red-300 rounded-2xl"
                : null
            }
          >
            {item.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
