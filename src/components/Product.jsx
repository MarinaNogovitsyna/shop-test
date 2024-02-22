import React, { useEffect, useState } from "react";
import md5 from "md5-hash";
import { requestOptions } from "../js/fetch";

export default function Product({ id }) {
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("http://api.valantis.store:40000/", {
      ...requestOptions,
      body: JSON.stringify({
        action: "get_items",
        params: { ids: [id] },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data.result);
        setBrand(data.result[0].brand);
        setPrice(data.result[0].price);
        setProduct(data.result[0].product);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  
  return (
    <div className="product">
      <span className="product__id">
        <span className="product__bold-span">ID: </span>
        {id}
      </span>
      <span className="product__name">
        <span className="product__bold-span">Название: </span>
        {product || "Не указано"}
      </span>
      <span className="product__brand">
        <span className="product__bold-span">Бренд: </span>
        {brand || "Не указан"}
      </span>
      <span className="product__price">
        <span className="product__bold-span">Цена: </span>
        {price || "Не указана"}
      </span>
    </div>
  );
}
