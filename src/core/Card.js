import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import ImageHelper from "./helper/ImageHelper";
const Card = ({
  product,
  addCart = true,
  removeCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);
  const cardTitle = product ? product.name : "Dotlify Porduct";
  const cardDescription = product
    ? product.description
    : "Dotlify Porduct description";
  const cardPrice = product ? product.price : "Dotlify Porduct price";

  const AddToCart = () => {
    addItemToCart(product, () => {
      setRedirect(true);
    });
  };

  const getRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="cart" />;
    }
  };

  const showAddToCart = (addCart) => {
    return (
      addCart && (
        <div className="col-12">
          <button
            type="button"
            onClick={AddToCart}
            className="btn rounded btn-success mt-2 mb-2"
          >
            Add to Cart
          </button>
        </div>
      )
    );
  };

  const removeToCart = (removeCart) => {
    return (
      removeCart && (
        <div className="col-12">
          <button
            onClick={() => {
              removeItemFromCart(product._id);
              setReload(!reload);
            }}
            className="btn btn-block btn-outline-danger mt-2 mb-2"
          >
            Remove from cart
          </button>
        </div>
      )
    );
  };

  return (
    <div className="card   border  " >
      <div className="card-header  lead">{cardTitle}</div>
      <div className="card-body">
        {getRedirect(redirect)}
        <div className="rounded   p-2">
          <ImageHelper product={product}  />
        </div>
        <p className="lead font-weight-normal text-wrap mt-2">
          {cardDescription}
        </p>
        <p className=" rounded font-weight-bold btn-sm px-4"> ${cardPrice}</p>
        <div className="row">
          {showAddToCart(addCart)}
          {removeToCart(removeCart)}
        </div>
      </div>
    </div>
  );
};

export default Card;
