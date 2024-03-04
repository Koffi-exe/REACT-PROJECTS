import React, { useEffect, useState } from "react";
import "./style.css";

export default function Loader({ url }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [skipProduct, setSkipProduct] = useState(0);

  useEffect(() => {
    fetchProduct();
  }, []);

  async function fetchProduct() {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${skipProduct}`
      );
      const data = await res.json();

      if (data && data.products) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setSkipProduct(skipProduct + 10);
        setLoading(false);
      } else {
        console.log("products not set");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="loadMoreContainer">
        <div className="productContainer">
          {products && products.length
            ? products.map((item) => {
                return (
                  <div className="product">
                    <h2>{item.title}</h2>
                    <img className="productImage" src={item.images[0]} />
                    <p>{item.description}</p>
                    <h3>{`Price: ${item.price} RS`}</h3>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      {products && products.length < 100 ? (
        <button onClick={fetchProduct}>
          {loading ? "Loading..." : "Load More"}
        </button>
      ) : null}
    </>
  );
}
