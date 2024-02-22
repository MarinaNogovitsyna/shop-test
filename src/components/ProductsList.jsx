import React, { useEffect, useState } from "react";
import Product from "./Product";
import { requestOptions } from "../js/fetch";
import Pagination from "./Pagination";

export default function ProductsList({ filter }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(50);
  const [loading, setLoading] = useState(true);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  function paginate(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function getPhrase() {
    if (filter === "") {
      return "Все товары";
    } else if (filter.filterName === "price") {
      return `Товары по цене ${filter.value}`;
    } else if (filter.filterName === "brand") {
      return `Товары бренда ${filter.value}`;
    }
    return `Результаты поиска по запросу: ${filter.value}`;
  }

  function getBody() {
    if (filter === "") {
      return {
        action: "get_ids",
        params: { offset: 1, limit: 150 },
      };
    } else if (filter.filterName === "price") {
      return {
        action: "filter",
        params: { price: +filter.value },
      };
    }
    {
      return {
        action: "filter",
        params: { [filter.filterName]: filter.value },
      };
    }
  }

  useEffect(() => {
    setLoading(true);
    fetch("http://api.valantis.store:40000/", {
      ...requestOptions,
      body: JSON.stringify(getBody()),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts([...new Set(data.result)]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [filter]);

  return (
    <main>
      {loading ? (
        <div class="loader"></div>
      ) : (
        <>
          <h1>{getPhrase()}</h1>
          <div className="main__products-list">
            {currentProducts.length ? (
              currentProducts.map((el) => <Product id={el} key={el} />)
            ) : (
              <h1>Товары не найдены</h1>
            )}
          </div>
        </>
      )}
      {products.length > productsPerPage && !loading ? (
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      ) : null}
    </main>
  );
}
