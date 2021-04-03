import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { isAutheticated } from '../auth/helper'
import { cartEmpty, loadAddress, loadCart } from '../core/helper/cartHelper'
import axios from "axios";
import { API } from '../Backend';
import PaymentSuccess from './PaymentSuccess';
import { createOrder } from '../core/helper/createOrder';

import LoginForm from "../core/AddressForm"



function PaymentCheckout({ products,
    //  setReload = f => f,
    // reload = undefined
}) {

    const [data, setData] = useState({
        loading: false,
        success: false,
        error: "",
        address: "",
        amount: "",
    })
    const [finalData, setFinalData] = useState([]);
    const [paymentRedirect, setPaymentRedirect] = useState(Boolean)

    const { user, token } = isAutheticated()
    const userId = isAutheticated() && isAutheticated().user._id
    const [reload, setReload] = useState(false);


    const [address, setAddress] = useState([]);

    // const token = isAutheticated() && isAutheticated().token
    // const userId = isAutheticated() && isAutheticated().user._id


    useEffect(() => {
        loadAddress()
        setAddress(loadAddress())
    }, [reload])



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

    const showAddress = () => {
        if (address) {
            return (
                <div>
                    <div className="card">
                        {address.map((address, index) => {
                            //console.log("nokia", product.products[0].name);
                            return (
                                <div>
                                    <h5 className='text-center'>{address.fullname}       {address.contact}</h5>
                                    <p className="text-dark text-center">{address.address} {address.pin} {address.city} {address.state}</p>
                                </div>)
                        })}
                    </div>
                    <br></br>
                    <LoginForm
                        setReload={setReload}
                        reload={reload}
                    />
                </div>
            )
        } else {


            return (

                <LoginForm
                    setReload={setReload}
                    reload={reload}
                />

            )
        }
    }


    const PaymentCart = () => {
        return (
            <div className="card">
                <div className="card-body">
                    <dl className="row border-bottom">
                        <dt className="col-6">Total price:</dt>
                        <dd className="col-6 text-right">₹{getFinalPrice()}</dd>

                        <dt className="col-6 text-success">Discount:</dt>
                        <dd className="col-6 text-success text-right">-₹00</dd>
                        <dt className="col-6 text-success">Shipping Charges:</dt>
                        <dd className="col-6 text-success text-right">-₹50</dd>
                        {/* <dt className="col-6 text-success">
                Coupon:{" "}
                <span className="small text-muted">EXAMPLECODE</span>{" "}
              </dt>
              <dd className="col-6 text-success text-right">-$68</dd> */}
                    </dl>
                    <dl className="row">
                        <dt className="col-6">Total:</dt>
                        <dd className="col-6 text-right  h5">
                            <strong>₹{getFinalPrice()}</strong>
                        </dd>
                    </dl>
                    <hr />
                    <p className="text-center">
                        {showPaytmButton()}
                    </p>
                </div>
            </div>
        )
    }


    const showPaytmButton = () => {
        return isAutheticated() ?
            < button className="btn btn-success" onClick={displayRazorpay} > Pay With rozerpay</button >
            : <Link to='/signin'>
                <button className="btn btn-success">SignIn</button>
            </Link>
    }


    const performRedirect = () => {

        if (paymentRedirect) {
            return <Redirect to="/payment/success" />;
        }
    };


    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }


    async function displayRazorpay() {

        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }






        // const result = await axios.post("http://localhost:8080/alpi/orders");


        // if (!result) {
        //     alert("Server error. Are you online?");
        //     return;
        // }


        const { amount, id: order_id, currency } = finalData;
        console.log("result", amount);

        const options = {
            key: "rzp_live_cfyLEKg4prXOOE", // Enter the Key ID generated from the Dashboard
            amount: amount,
            currency: currency,
            name: user.name,
            description: "Test Transaction",
            //image: { logo },
            order_id: order_id,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                    transactionamount: getFinalPrice(),
                };
                const orderData = {
                    products: products,
                    transaction_id: response.razorpay_signature,
                    amount: getFinalPrice(),
                    address: address

                }
                // performRedirect()
                axios.post(`${API}/payment`, data)
                    .then(res => {


                        createOrder(user._id, token, orderData)
                            .then((data) => {
                                if (data.error) {
                                    console.log(data.error);
                                } else {
                                    console.log(data);
                                    setPaymentRedirect(true)
                                    cartEmpty()
                                }
                            }).catch(console.log("Error in createOrder"));

                    })
                    .catch(e => console.log(e))


                // const result = await axios.post("http://localhost:3000/payment/success", data);

                // alert(response.razorpay_payment_id);
                // console.log(data.razorpayPaymentId);
            },
            prefill: {
                name: user.name,
                email: user.email,
                contact: address[0].contact,
            },
            // notes: {
            //     address: "Soumya Dey Corporate Office",
            // },
            theme: {
                color: "#61dafb",
            },
        };



        axios.post(`${API}/orders`, { amount: getFinalPrice() })
            .then(res => {
                options.order_id = res.data.id;
                options.amount = res.data.amount;
                console.log(options)
                var rzp1 = new window.Razorpay(options);
                rzp1.open();
            })
            .catch(e => console.log(e))
        // const paymentObject = new window.Razorpay(options);
        // await paymentObject.open();
    }

    //

    return (
        <div>
            {/* <h3>Payment Checkout {getFinalPrice()}</h3>
            <br></br>

            <br></br> */}
            {showAddress()}

            <br></br>
            {PaymentCart()}
            <br></br>


            {performRedirect()}

        </div>
    )
}

export default PaymentCheckout




