import React, { useState, useEffect } from "react";
import Carousel from "../carousel/Carousel";
import "../styles.css";

import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import ImageSider from "./ImageSider";
import eCommercePage from "./MdCard";
import CardProductGrid from "./NewCard";

import CardIcon from '../card/CardIcon'
import { data } from '../data'
import Banner from "../carousel/Banner";


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

  const iconProducts = data.iconProducts;
  const rows = [...Array(Math.ceil(iconProducts.length / 4))];
  // chunk the products into the array of rows
  const productRows = rows.map((row, idx) =>
    iconProducts.slice(idx * 4, idx * 4 + 4)
  );

  const carouselContent = productRows.map((row, idx) => (
    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
      <div className="row g-3">
        {row.map((product, idx) => {
          {/* const ProductImage = product.img; */ }
          return (
            <div key={idx} className="col-md-3">
              <CardIcon
                title={product.title}
                text={product.text}
                tips={product.tips}
                to={product.to}
              >
                {/* <ProductImage className={product.cssClass} /> */}
              </CardIcon>
            </div>
          );
        })}
      </div>
    </div>
  ));



  useEffect(() => {
    LoadAllProduct();
  }, []);
  return (

    <div>
      <>
        {/* <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} /> */}
        {/* <Carousel id="elect-product-category" className="mb-3">
        {carouselContent}
      </Carousel> */}
        <Base title="Home Page" description="Cover Store">
          <ImageSider className="mb-3" />

          <center><h1 className="center">All Product</h1></center>
          <div className="row text-center">


            <div className="row">
              {product.map((product, index) => {
                return (
                  <div key={index} className="col-sm-4">
                    <CardProductGrid product={product} />
                  </div>
                );
              })}
            </div>
          </div>
        </Base>
      </>
    </div>
  );
}
