import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { getCorrectValue } from "../js/string";

export default function FilterPrice({ addFilter }) {
  const [filterPrice, setFilterPrice] = useState("");

  function handleChange(e) {
    setFilterPrice(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (isNaN(Number(filterPrice.trim()))) {
      alert("Некорретные данные ввода.");
      return;
    }
    const correctValue = getCorrectValue(filterPrice);
    addFilter("price", correctValue);
    setFilterPrice("");
  }

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <label>
        <span>Поиск по цене:</span>
        <input type="text" value={filterPrice} onChange={handleChange} />
      </label>
      <button type="submit">
        <IoSearchOutline />
      </button>
    </form>
  );
}
