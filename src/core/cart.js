import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../Backend";
import Base from "./Base";
import Card from "./Card";
import { loadCart, loadAddress } from "./helper/cartHelper";
import PaymentCheckout from "../payment/PaymentCheckout";
import firebase from '../firebase'
import { createOrder } from "./helper/createOrder";
import { isAutheticated } from "../auth/helper";

import LoginForm from "../address/AddressForm";


const Cart = () => {
  const [products, setProducts] = useState([]);


  const [reload, setReload] = useState(false);

  const { user, token } = isAutheticated()

  //console.log("userID", user._id, token);

  useEffect(() => {
    loadCart()
    setProducts(loadCart());
    // setAddress(loadAddress())
  }, [reload]);


  const showCart = () => {

    if (products) {
      return loadAllProducts()
    } else {
      return (<h1>
        add product to card
      </h1>)
    }

  }


  const loadAllProducts = () => {
    return (
      <div>
        <h2>This section is to load products</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeCart={true}
            addCart={false}
            setReload={setReload}
            reload={reload}
          />
        ))}
      </div>
    );
  };
  const loadCheckout = async () => {
    // await firebase.myOrder(products, { merge: false })
    // console.log("product add successfully");


    // return (
    //   <div>
    //     <h2>PayTm checkout</h2>
    //   </div>
    // );


    const orderData = {
      products: products,
      transaction_id: "16783627",
      amount: "299"

    }



  };

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="col-md-6">
          {showCart()}

        </div>

        <div className="col-md-6">

          <PaymentCheckout products={products}
            setReload={setReload}
          />

          {/* <h3>hii
          <button onClick={loadCheckout} className="btn btn-success">Order Success</button>
          </h3> */}
        </div>
      </div>
    </Base>
  );
};

export default Cart;
