import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { isAutheticated } from '../auth/helper';
import Base from '../core/Base';
import { purchaseList } from '../userDashboard/helper/purchaseList'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheckCircle,
    faExclamationTriangle,
    faHistory,
    faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { API } from '../Backend';



function MyOrders() {
    const [order, setOrder] = useState([]);

    const { user, token } = isAutheticated()



    const preload = () => {
        return purchaseList(user._id, token).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrder(data);
                // console.log(data);
            }
        });
    };

    useEffect(() => {
        preload()
        console.log(user._id);
    }, [])


    return (
        <Base title="Welcome admin" description="Manage products here">

            <Link className="btn btn-info" to={`/`}>
                <span className="">Home</span>
            </Link>
            <div className="container mb-3">
                <h4 className="my-3">All Orders</h4>
                <div className="row g-3">

                    {order.map((product, index) => {
                        return (
                            <div className="col-md-12">


                                <div className="card">
                                    <div className="row g-0">
                                        {product.products.map((product, index) => {
                                            return (
                                                <div className="col-md-3 text-center">
                                                    <img
                                                        src={`${API}/product/photo/${product._id}`}
                                                        className="img-fluid"
                                                        alt="..."
                                                        width="80"
                                                    />


                                                </div>
                                            )
                                        })}


                                        <div className="col-md-9">


                                            {product.products.map((product, index) => {
                                                return (
                                                    <div className="card-body">
                                                        <h6>
                                                            <Link to="/" className="text-decoration-none">
                                                                {product.name}
                                                            </Link>
                                                        </h6>
                                                        <div className="small">
                                                            <span className="text-muted mr-2">Size:</span>
                                                            <span className="mr-3">M</span>
                                                            <span className="text-muted mr-2">Price:</span>
                                                            <span className="mr-3">{product.price}</span>
                                                            <span className="text-muted mr-2">Color:</span>
                                                            <span className="mr-3">
                                                                <span className="bg-primary px-1 rounded">
                                                                    &nbsp;&nbsp;&nbsp;
                                                      </span>
                                                            </span>
                                                        </div>
                                                        <div className="mt-2"></div>
                                                    </div>
                                                )
                                            })}
                                            <div className="card-header">
                                                <div className="small ">
                                                    <span className="  border bg-secondary rounded-left px-2 text-white">
                                                        Order ID
                      </span>
                                                    <span className="border bg-white rounded-right px-2 mr-2">
                                                        {product._id}
                                                    </span>
                                                    <br />


                                                    <span className=" border bg-secondary rounded-left px-2 text-white">
                                                        Date
                      </span>
                                                    <span className="border bg-white rounded-right px-2">

                                                        {product.updatedAt}

                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <span className="mr-2">Status:</span>
                                                <span className="text-success">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                                                    {product.status}
                                                </span>
                                                &nbsp;&nbsp;&nbsp;
                                                <span className="mr-2">Paid amount:</span>

                                                <span className="text-success">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="mr-1" />
                                                    {product.amount}
                                                </span>
                                            </div>


                                        </div>

                                    </div>


                                </div>
                                <hr />
                            </div>


                        )
                    })}

                </div>
            </div>
        </Base>
    )
}

export default MyOrders
