import React from "react";
import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const handleSearch = () => {
    setQuery((query) => createQueryObject(query, { search: search }));
    setSearch("");
  };
  return (
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
  );
}

export default SearchBox;
