import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { getCorrectValue } from "../js/string";

export default function FilterBrand({ addFilter }) {
  const [filterBrand, setFilterBrand] = useState("");

  function handleChange(e) {
    setFilterBrand(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const correctFilter = getCorrectValue(filterBrand);
    addFilter("brand", correctFilter);
    setFilterBrand("");
  }

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <label>
        <span>Поиск по бренду:</span>
        <input type="text" value={filterBrand} onChange={handleChange} />
      </label>
      <button type="submit">
        <IoSearchOutline />
      </button>
    </form>
  );
}
