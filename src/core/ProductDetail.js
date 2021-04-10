import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartPlus,
    faHeart,
    faShoppingCart,
    faMinus,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { addItemToCart, loadCart } from "./helper/cartHelper";
import { oneProducts, getProducts } from "./helper/coreapicalls";

import ImageHelper from "./helper/ImageHelper";
import Base from "./Base";

import Carousel from 'react-bootstrap/Carousel'
import { API } from "../Backend";

function ProductDetail({ match }) {

    const [redirect, setRedirect] = useState(false);
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);


    const AddToCart = () => {
        addItemToCart(products, () => {
            setRedirect(true);
        });
    };

    const getRedirect = (redirect) => {
        if (redirect) {
            // <ProductDetail product={product} />
            return <Redirect to="cart" />;
        }
    };


    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        oneProducts(match.params.productId).then((data) => {
            console.log(data);

            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    }, [reload]);

    const loadAllProducts = () => {
        return (
            <div>


                <div className="container-fluid mt-3">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row mb-3">
                                <div className="col-md-5 text-center">
                                    <Carousel activeIndex={index} onSelect={handleSelect}>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={`${API}/product/photo/${products._id}`}
                                                alt="First slide"
                                            />
                                            {/* <Carousel.Caption>
                                                <h3>First slide label</h3>
                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                            </Carousel.Caption> */}
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src={`${API}/product/photo/${products._id}`}
                                                alt="Second slide"
                                            />

                                            {/* <Carousel.Caption>
                                                <h3>Second slide label</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                            </Carousel.Caption> */}
                                        </Carousel.Item>
                                        {/* <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="holder.js/800x400?text=Third slide&bg=20232a"
                                                alt="Third slide"
                                            />

                                            <Carousel.Caption>
                                                <h3>Third slide label</h3>
                                                <p>
                                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                                            </Carousel.Caption>
                                        </Carousel.Item> */}
                                    </Carousel>

                                    {/* <img
                                        src="{product.link}"
                                        className="img-fluid mb-3"
                                        alt=""
                                    />
                                    <img
                                        src="../../images/products/tshirt_grey_480x400.webp"
                                        className="border border-secondary mr-2" width="75"
                                        alt="..."
                                    /> */}
                                    {/* <img
                                        src="../../images/products/tshirt_black_480x400.webp"
                                        className="border border-secondary mr-2" width="75"
                                        alt="..."
                                    />
                                    <img
                                        src="../../images/products/tshirt_green_480x400.webp"
                                        className="border border-secondary mr-2" width="75"
                                        alt="..."
                                    /> */}
                                </div>
                                <div className="col-md-7">
                                    <h1 className="h5 d-inline mr-2">
                                        {products.name}
                                    </h1>
                                    <span className="badge bg-success mr-2">New</span>
                                    <span className="badge bg-danger mr-2">Hot</span>
                                    <div className="mb-3">
                                        <IconStarFill className="text-warning mr-1" />
                                        <IconStarFill className="text-warning mr-1" />
                                        <IconStarFill className="text-warning mr-1" />
                                        <IconStarFill className="text-warning mr-1" />
                                        <IconStarFill className="text-secondary mr-1" />|{" "}
                                        <span className="text-muted small">
                                            42 ratings and 4 reviews
                    </span>
                                    </div>

                                    {/* <dl className="row small mb-3">
                                        <dt className="col-sm-3">Availability</dt>
                                        <dd className="col-sm-9">In stock</dd>
                                        <dt className="col-sm-3">Sold by</dt>
                                        <dd className="col-sm-9">Authorised Store</dd>
                                        <dt className="col-sm-3">Size</dt>
                                        <dd className="col-sm-9">
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="size"
                                                    id="sizes"
                                                    disabled
                                                />
                                                <label className="form-check-label" htmlFor="sizes">
                                                    S
                        </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="size"
                                                    id="sizem"
                                                    disabled
                                                />
                                                <label className="form-check-label" htmlFor="sizem">
                                                    M
                        </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="size"
                                                    id="sizel"
                                                />
                                                <label className="form-check-label" htmlFor="sizel">
                                                    L
                        </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="size"
                                                    id="sizexl"
                                                />
                                                <label className="form-check-label" htmlFor="sizexl">
                                                    XL
                        </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="size"
                                                    id="sizexxl"
                                                />
                                                <label className="form-check-label" htmlFor="sizexxl">
                                                    XXL
                        </label>
                                            </div>
                                        </dd>
                                        <dt className="col-sm-3">Color</dt>
                                        <dd className="col-sm-9">
                                            <button className="btn btn-sm btn-primary p-2 mr-2"></button>
                                            <button className="btn btn-sm btn-secondary p-2 mr-2"></button>
                                            <button className="btn btn-sm btn-success p-2 mr-2"></button>
                                            <button className="btn btn-sm btn-danger p-2 mr-2"></button>
                                            <button className="btn btn-sm btn-warning p-2 mr-2"></button>
                                            <button className="btn btn-sm btn-info p-2 mr-2"></button>
                                            <button className="btn btn-sm btn-dark p-2 mr-2"></button>
                                        </dd>
                                    </dl> */}

                                    <div className="mb-3">
                                        <span className="font-weight-bold h5 mr-2">₹{products.price}</span>
                                        {/* <del className="small text-muted mr-2">$2000</del>
                                        <span className="rounded p-1 bg-warning  mr-2 small">
                                            -$100
                    </span> */}
                                        {/* </div>
                                    <div className="mb-3">
                                        <div className="d-inline float-left mr-2">
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
                                        </div> */}

                                        {/* <div id="addButtons" style={{ float: "left", width: "100" }}>
                                            <div className="addToBagBtn  fixedCartBtnWrapper" id="fixedCartBtnWrapper">
                                                <div className=" col-xs-12 pull-left" id="addButtons">
                                                    <button id="addToCart" className="addtocart pull-left ">
                                                        <span className="">ADD TO BAG</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div> */}
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-primary mr-2"
                                            title="Add to cart"
                                            onClick={AddToCart}
                                        // style={{
                                        //     display: "block",
                                        //     width: 100,
                                        //     position: "fixed",
                                        //     bottom: 0,
                                        //     left: 0,
                                        //     right: 0,

                                        //     height: "64px",
                                        //     padding: "10px 20px",
                                        // }}
                                        >
                                            <FontAwesomeIcon icon={faCartPlus} /> Add to cart
                    </button>
                                        {/* <button
                                            type="button"
                                            className="btn btn-sm btn-warning mr-2"
                                            title="Buy now"
                                        >
                                            <FontAwesomeIcon icon={faShoppingCart} /> Buy now
                    </button> */}
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-secondary"
                                            title="Add to wishlist"
                                        >
                                            <FontAwesomeIcon icon={faHeart} />
                                        </button>
                                    </div>
                                    <div>
                                        <p className="font-weight-bold mb-2 small">
                                            Product Highlights
                    </p>
                                        <ul className="small">
                                            {/* <li>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                                            <li>Etiam ullamcorper nibh eget faucibus dictum.</li>
                                            <li>Cras consequat felis ut vulputate porttitor.</li> */}

                                            {products.description}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        );
    };

    if (products == '') {
        return (
            <Base title="Product Details" description="">
                <div className="loader text-center"></div>
            </Base>
        )
    }
    else {
        return (
            <Base title="Product Details" description="">
                {getRedirect(redirect)}
                <div >{loadAllProducts()}</div>



            </Base>
        );
    }
}

export default ProductDetail

