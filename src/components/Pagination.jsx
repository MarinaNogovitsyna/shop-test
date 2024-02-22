import React, { useState } from "react";

export default function Pagination({
  productsPerPage,
  totalProducts,
  paginate,
}) {
  const [active, setActive] = useState(1);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  function handleClick(num) {
    paginate(num);
    setActive(num);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((num) => (
          <li
            key={num}
            className={`${active === num ? "pagination__active" : ""}`}
          >
            <a href="#" onClick={() => handleClick(num)}>
              {num}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
