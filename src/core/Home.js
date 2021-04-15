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
import Navbar from "../drawer/NewMenu";
import SwipeMenu from "../drawer/NewMenu";

import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Slide
} from "@material-ui/core/";



import { Menu, Search } from "@material-ui/icons/";



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
   
  }, [])

  // const iconProducts = data.iconProducts;
  // const rows = [...Array(Math.ceil(iconProducts.length / 4))];
  // // chunk the products into the array of rows
  // const productRows = rows.map((row, idx) =>
  //   iconProducts.slice(idx * 4, idx * 4 + 4)
  // );

  // const carouselContent = productRows.map((row, idx) => (
  //   <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
  //     <div className="row g-3">
  //       {row.map((product, idx) => {
  //         {/* const ProductImage = product.img; */ }
  //         return (
  //           <div key={idx} className="col-md-3">
  //             <CardIcon
  //               title={product.title}
  //               text={product.text}
  //               tips={product.tips}
  //               to={product.to}
  //             >
  //               {/* <ProductImage className={product.cssClass} /> */}
  //             </CardIcon>


  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // ));
  const giveProduct = product.map((product, index) => {
    return (
      <div key={index} className="col-sm-4">
        <CardProductGrid product={product} />

      </div>

    );
  })



  useEffect(() => {
    LoadAllProduct();
  }, []);

  if (product == "") {

    return (
      <Base title="Home Page" description="Cover Store">
        <ImageSider className="mb-3" />

        <center><h1 className="center">All Product</h1>
          <div className="row text-center">
            <div className="loader text-center"></div>
          </div>
        </center>

      </Base>

    )
  }
  else {
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

              <div className="row" >
                {giveProduct}
              </div>

            </div>
            {/* (< div className="loader"></div>) */}

          </Base>
          {/* <div className="loader"></div> */}
        </>
      </div>
    );

  }
}
