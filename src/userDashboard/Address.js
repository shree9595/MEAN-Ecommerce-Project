import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { isAutheticated } from '../auth/helper';
import Base from '../core/Base';
import { addressList } from '../userDashboard/helper/purchaseList'



function Address() {
    const [order, setOrder] = useState([]);

    const { user, token } = isAutheticated()



    const preload = () => {
        return addressList(user._id, token).then((data) => {
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
            <h2 className="mb-4">All Orders</h2>
            <Link className="btn btn-info" to={`/`}>
                <span className="">Home</span>
            </Link>
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center text-black my-3">Address</h2>

                    {order.map((product, index) => {
                        {/* console.log("nokia", product.products[0].name); */ }
                        return (


                            <div key={index} className="row text-center mb-2 ">
                                <div className="col-4">
                                    <h3 className=" text-left">
                                        {/* {product.products.name} */}
                                        {product.address}
                                        <br></br>
                                        {/* {product._id} */}
                                    </h3>
                                </div>
                                <div className="col-4">
                                    <h3 className=" text-left">
                                        {/* {product.products.name} */}
                                        {product.city}
                                        <br></br>
                                        {/* {product._id} */}
                                    </h3>
                                </div>
                                <div className="col-4">
                                    <h3 className=" text-left">
                                        {/* {product.products.name} */}
                                        {product.pin}
                                        <br></br>
                                        {/* {product._id} */}
                                    </h3>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Base>
    )
}

export default Address
