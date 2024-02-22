import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function FilterName({ addFilter }) {
  const [filterName, setFilterName] = useState("");

  function handleChange(e) {
    setFilterName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addFilter("product", filterName.trim());
    setFilterName("");
  }

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <label>
        <span>Поиск по названию:</span>
        <input type="text" value={filterName} onChange={handleChange} />
      </label>
      <button type="submit">
        <IoSearchOutline />
      </button>
    </form>
  );
}
