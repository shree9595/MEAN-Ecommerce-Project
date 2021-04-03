import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faExclamationTriangle,
    faHistory,
    faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const OrdersView = () => {


    return (
        <div className="container mb-3">
            <h4 className="my-3">Orders</h4>
            <div className="row g-3">
                <div className="col-md-6">
                   
                   
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-3 text-center">
                                <img
                                    src="../../images/products/tshirt_red_480x400.webp"
                                    className="img-fluid"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-9">
                                <div className="card-header">
                                    <div className="small">
                                        <span className="border bg-secondary rounded-left px-2 text-white">
                                            Order ID
                      </span>
                                        <span className="border bg-white rounded-right px-2 mr-2">
                                            #123456
                      </span>
                                        <span className="border bg-secondary rounded-left px-2 text-white">
                                            Date
                      </span>
                                        <span className="border bg-white rounded-right px-2">
                                            25 Sep 20, 12:34 PM
                      </span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6>
                                        <Link to="/" className="text-decoration-none">
                                            Great product name goes here
                      </Link>
                                    </h6>
                                    <div className="small">
                                        <span className="text-muted mr-2">Size:</span>
                                        <span className="mr-3">M</span>
                                        <span className="text-muted mr-2">Price:</span>
                                        <span className="mr-3">$1234</span>
                                        <span className="text-muted mr-2">Color:</span>
                                        <span className="mr-3">
                                            <span className="bg-primary px-1 rounded">
                                                &nbsp;&nbsp;&nbsp;
                        </span>
                                        </span>
                                    </div>
                                    <div className="mt-2"></div>
                                </div>
                                <div className="card-footer">
                                    <span className="mr-2">Status:</span>
                                    <span className="text-success">
                                        <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                      Completed
                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-3 text-center">
                                <img
                                    src="../../images/products/tshirt_grey_480x400.webp"
                                    className="img-fluid"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-9">
                                <div className="card-header">
                                    <div className="small">
                                        <span className="border bg-secondary rounded-left px-2 text-white">
                                            Order ID
                      </span>
                                        <span className="border bg-white rounded-right px-2 mr-2">
                                            #123456
                      </span>
                                        <span className="border bg-secondary rounded-left px-2 text-white">
                                            Date
                      </span>
                                        <span className="border bg-white rounded-right px-2">
                                            25 Sep 20, 12:34 PM
                      </span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6>
                                        <Link to="/" className="text-decoration-none">
                                            Great product name goes here
                      </Link>
                                    </h6>
                                    <div className="small">
                                        <span className="text-muted mr-2">Size:</span>
                                        <span className="mr-3">M</span>
                                        <span className="text-muted mr-2">Price:</span>
                                        <span className="mr-3">$1234</span>
                                        <span className="text-muted mr-2">Color:</span>
                                        <span className="mr-3">
                                            <span className="bg-primary px-1 rounded">
                                                &nbsp;&nbsp;&nbsp;
                        </span>
                                        </span>
                                    </div>
                                    <div className="mt-2"></div>
                                </div>
                                <div className="card-footer">
                                    <span className="mr-2">Status:</span>
                                    <span className="text-primary">
                                        <FontAwesomeIcon icon={faHistory} className="mr-1" />
                      Processing
                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-3 text-center">
                                <img
                                    src="../../images/products/tshirt_black_480x400.webp"
                                    className="img-fluid"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-9">
                                <div className="card-header">
                                    <div className="small">
                                        <span className="border bg-secondary rounded-left px-2 text-white">
                                            Order ID
                      </span>
                                        <span className="border bg-white rounded-right px-2 mr-2">
                                            #123456
                      </span>
                                        <span className="border bg-secondary rounded-left px-2 text-white">
                                            Date
                      </span>
                                        <span className="border bg-white rounded-right px-2">
                                            25 Sep 20, 12:34 PM
                      </span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6>
                                        <Link to="/" className="text-decoration-none">
                                            Great product name goes here
                      </Link>
                                    </h6>
                                    <div className="small">
                                        <span className="text-muted mr-2">Size:</span>
                                        <span className="mr-3">M</span>
                                        <span className="text-muted mr-2">Price:</span>
                                        <span className="mr-3">$1234</span>
                                        <span className="text-muted mr-2">Color:</span>
                                        <span className="mr-3">
                                            <span className="bg-primary px-1 rounded">
                                                &nbsp;&nbsp;&nbsp;
                        </span>
                                        </span>
                                    </div>
                                    <div className="mt-2"></div>
                                </div>
                                <div className="card-footer">
                                    <span className="mr-2">Status:</span>
                                    <span className="text-warning">
                                        <FontAwesomeIcon
                                            icon={faExclamationTriangle}
                                            className="mr-1"
                                        />
                      Pending
                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-3 text-center">
                                <img
                                    src="../../images/products/tshirt_green_480x400.webp"
                                    className="img-fluid"
                                    alt="..."
                                />
                            </div>
                            <div className="col-md-9">
                                <div className="card-header">
                                    <div className="small">
                                        <span className="border bg-secondary rounded-left px-2 text-white">
                                            Order ID
                      </span>
                                        <span className="border bg-white rounded-right px-2 mr-2">
                                            #123456
                      </span>
                                        <span className="border bg-secondary rounded-left px-2 text-white">
                                            Date
                      </span>
                                        <span className="border bg-white rounded-right px-2">
                                            25 Sep 20, 12:34 PM
                      </span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h6>
                                        <Link to="/" className="text-decoration-none">
                                            Great product name goes here
                      </Link>
                                    </h6>
                                    <div className="small">
                                        <span className="text-muted mr-2">Size:</span>
                                        <span className="mr-3">M</span>
                                        <span className="text-muted mr-2">Price:</span>
                                        <span className="mr-3">$1234</span>
                                        <span className="text-muted mr-2">Color:</span>
                                        <span className="mr-3">
                                            <span className="bg-primary px-1 rounded">
                                                &nbsp;&nbsp;&nbsp;
                        </span>
                                        </span>
                                    </div>
                                    <div className="mt-2"></div>
                                </div>
                                <div className="card-footer">
                                    <span className="mr-2">Status:</span>
                                    <span className="text-danger">
                                        <FontAwesomeIcon icon={faTimesCircle} className="mr-1" />
                      Cancelled
                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default OrdersView;


<div className="row">
<div className="col-12">
    <h2 className="text-center text-black my-3">Total  orders</h2>

    {order.map((product, index) => {
        console.log("nokia", product.products);
        return (


            <div key={index} className="row text-center mb-2 ">
                <div className="col-4">
                <h3>Product Name</h3>
                    {product.products.map((product, index) => {
                        console.log("ok new", product)
                        return (
                            <div>
                                <h3 className=" text-left">

                                    {product.name}
                                </h3>
                                <h6 className=" text-left">

                                    Price :  {product.price}
                                </h6>


                            </div>
                        )
                    })}
                    <h6 className="text-left">{product._id}</h6>
                    <hr></hr>
                </div>
                <div className="col-4">
                    {/* <Link
                        className="btn btn-success"
                    // to={`/admin/product/update/${product._id}`}
                    > */}
                    <span className="">
                        ₹{product.amount}
                    </span>
                    {/* </Link> */}
                </div>
                <div className="col-4">
                    <button
                    // onClick={() => {
                    //     deleteThisProduct(product._id);
                    // }}
                    // className="btn btn-danger"
                    >
                        Delete
            </button>
                </div>
            </div>
        );
    })}
</div>
</div>
