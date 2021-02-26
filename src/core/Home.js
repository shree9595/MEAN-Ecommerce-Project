import React, { useState, useEffect } from "react";
import "../styles.css";

import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);

  const LoadAllProduct = () => {
    getProducts().then((data) => {
      console.log(data);

      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
      }
    });
  };

  useEffect(() => {
    LoadAllProduct();
  }, []);
  return (
    <Base title="Home Page">
      <center><h1 className="center">All Product</h1></center>
      <div className="row text-center">


        <div className="row">
          {product.map((product, index) => {
            return (
              <div key={index} className="col-4">
                <Card product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </Base>
  );
}
