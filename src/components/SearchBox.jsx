import React from "react";
import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const handleSearch = () => {
    setQuery((query) => createQueryObject(query, { search: search }));
    setSearch("");
  };
  return (
    <div className="mx-2 mb-12">
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        className="mr-2 border-dashed border-2 border-red-500 p-2 w-64 text-base text-red-500 rounded-lg focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-red-500 text-white border-none text-base p-2 rounded-lg cursor-pointer"
      >
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
