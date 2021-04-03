import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { isAutheticated } from '../auth/helper';
import Base from '../core/Base';
import { getAllOrder, getOrderStatus, } from '../admin/helper/adminapicall'





function MyALLOrders() {
    const [order, setOrder] = useState([]);
    const [orderStatus, setOrderStatus] = useState([]);

    const { user, token } = isAutheticated()


    const preloadStatus = () => {
        return getOrderStatus(user._id, token).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrderStatus(data);
                // console.log(data);
            }
        });
    }



    const preload = () => {
        return getAllOrder(user._id, token).then((data) => {
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
        preloadStatus()
    }, [])


    return (
        <Base title="Welcome admin" description="Manage products here">
            <h2 className="mb-4">All Orders</h2>
            <Link className="btn btn-info" to={`/`}>
                <span className="">Home</span>
            </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-black my-3">Total  orders</h2>

                    {order.map((product, index) => {
                        console.log(product)
                        return (


                            <div key={index} className="row text-center mb-2 ">
                                <div className="col-3">
                                    <h3 className=" text-left">
                                        {product.user.name}
                                    </h3>
                                    <h6 className=" text-left">
                                        {product._id}
                                    </h6>
                                </div>
                                <div className="col-3">
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

                                </div>
                                <div className="col-3">
                                    <h3> Status</h3>
                                    <span className="badge badge-success mr-2">

                                        {product.status}
                                    </span>

                                </div>
                                <div className="col-3">
                                    <h3> Total Price</h3>
                                    <span className="mr-2">

                                        {product.amount}
                                    </span>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Base>
    )
}

export default MyALLOrders
