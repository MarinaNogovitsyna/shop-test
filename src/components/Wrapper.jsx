import React, { useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import ProductsList from "./ProductsList";

export default function Wrapper() {
  const [filter, setFilter] = useState("");

  function addFilter(filterName, value) {
    if (!filterName) {
      setFilter("");
      return;
    }
    setFilter({ filterName, value });
  }

  return (
    <>
      <Header />
      <Filters addFilter={addFilter} />
      <ProductsList filter={filter} />
    </>
  );
}
