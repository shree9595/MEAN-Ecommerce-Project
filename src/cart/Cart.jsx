import React, { useState, useEffect, lazy } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconHeartFill } from "bootstrap-icons/icons/heart-fill.svg";
import { ReactComponent as IconTrash } from "bootstrap-icons/icons/trash.svg";
import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
// const CouponApplyForm = lazy(() =>
//   import("../../components/others/CouponApplyForm")
// );
import { loadCart, loadAddress, createOrder, removeItemFromCart } from "../core/helper/cartHelper";
import PaymentCheckout from "../payment/PaymentCheckout";
import firebase from '../firebase'

import { isAutheticated } from "../auth/helper";
import { API } from "../Backend";
import Base from "../core/Base";
import CheckoutView from "./Checkout";



const CartView = () => {
  // constructor(props) {
  //   super();
  //   this.state = {};
  // }
  // onSubmitApplyCouponCode = async (values) => {
  //   alert(JSON.stringify(values));
  // };


  const [products, setProducts] = useState([]);


  const [reload, setReload] = useState(false);

  const { user, token } = isAutheticated()

  //console.log("userID", user._id, token);

  useEffect(() => {
    loadCart()
    setProducts(loadCart());
    // setAddress(loadAddress())
  }, [reload]);

  const getFinalPrice = () => {
    let amount = 0;
    if (products) {
      products.map(p => {
        amount = amount + p.price
        // setFinalAmount(amount)
        return amount
      })
    }
    return amount
  }

  {
    return (

      <Base>
        <React.Fragment>
          <div className="bg-secondary border-top p-4 text-white mb-3">
            <h1 className="display-6">Shopping Cart</h1>
          </div>



          <div className="container mb-3">
            <div className="row">
              <div className="col-md-9">
                <div className="card">
                  <div className="table-responsive">
                    <table className="table table-borderless">
                      <thead className="text-muted">
                        <tr className="small text-uppercase">
                          <th scope="col">Product</th>
                          {/* <th scope="col" width={120}>
                          Quantity
                        </th> */}
                          <th scope="col" width={150}>
                            Price
                        </th>
                          <th scope="col" className="text-right" width={130}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {products && products.map((product, index) => (

                          <tr key={index}>
                            <td>
                              <div className="row">
                                <div className="col-3 d-none d-md-block">
                                  <img
                                    src={`${API}/product/photo/${product._id}`}
                                    width="80"
                                    alt="..."
                                  />
                                </div>
                                <div className="col">
                                  <Link
                                    to={`productDetail/${product._id}`}
                                    className="text-decoration-none"
                                  >
                                    {product.name}
                                  </Link>
                                  {/* <p className="small text-muted">
                                  Size: XL, Color: blue, Brand: XYZ
                              </p> */}
                                </div>
                              </div>
                            </td>


                            {/* <td>
                            <div className="input-group input-group-sm mw-140">
                              <button
                                className="btn btn-primary text-white"
                                type="button"
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue="1"
                              />
                              <button
                                className="btn btn-primary text-white"
                                type="button"
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>
                          </td> */}


                            <td>
                              <var className="price">₹{product.price}</var>
                              {/* <small className="d-block text-muted">
                              ₹79.00 each
                          </small> */}
                            </td>
                            <td className="text-right">
                              <button className="btn btn-sm btn-outline-secondary mr-2">
                                <IconHeartFill className="i-va" />
                              </button>
                              <button onClick={() => {
                                removeItemFromCart(product._id);
                                setReload(!reload);
                              }} className="btn btn-sm btn-outline-danger">
                                <IconTrash className="i-va" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>


                  <div className="card-footer">
                    {/* <Link to="/checkout" className="btn btn-primary float-right">
                      Make Purchase <IconChevronRight className="i-va" />
                    </Link> */}
                    {/* <Link to="/" className="btn btn-secondary">
                      <IconChevronLeft className="i-va" /> Continue shopping
                  </Link> */}
                  </div>
                </div>
                <div className="alert alert-success mt-3">
                  <p className="m-0">
                    <IconTruck className="i-va mr-2" /> Free Delivery within 1-2
                  weeks
                </p>
                </div>
              </div>
              <div className="col-md-3">

                <div className="card mb-3">

                  <div className="card-body">
                    <PaymentCheckout products={products}
                      setReload={setReload}
                    />
                  </div>
                </div>



              </div>
            </div>
          </div>



          {/* <div className="bg-light border-top p-4">
            <div className="container">
              <h6>Payment and refund policy</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
          </div> */}
        </React.Fragment>
      </Base>
    );
  }
}

export default CartView;
