import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import ImageHelper from "./helper/ImageHelper";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import ProductDetail from "./ProductDetail";

const CardProductGrid = ({ product, addCart = true,
    removeCart = false,
    setReload = (f) => f,
    //   function(f){return f}
    reload = undefined, }) => {
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
            // <ProductDetail product={product} />
            return <Redirect to="ProductDetail" />;
        }
    };

    const showAddToCart = (addCart) => {
        return (
            addCart && (
                // <button
                //     type="button"
                //     className="btn btn-sm btn-primary"
                //     title="Add to cart"
                //     onClick={
                //         AddToCart
                //     }

                // >
                //     <FontAwesomeIcon icon={faCartPlus} />
                // </button>
                <Link
                    className="btn btn-success"
                    to={`productDetail/${product._id}`}
                >
                    <FontAwesomeIcon icon={faCartPlus} />
                </Link>
            )
        );
    };
    //const product = props.data;
    return (
        <div className="card">
            {getRedirect(redirect)}
            
            <Link
                className="btn "
                to={`productDetail/${product._id}`}
            >
                <ImageHelper product={product} />
            </Link>
            {product.isNew && (
                <span className="badge bg-success position-absolute mt-2 ml-2">
                    New
                </span>
            )}
            {product.isHot && (
                <span className="badge bg-danger position-absolute r-0 mt-2 mr-2">
                    Hot
                </span>
            )}
            {(product.discountPercentage > 0 || product.discountPrice > 0) && (
                <span
                    className={`rounded position-absolute p-2 bg-warning  ml-2 small ${product.isNew ? "mt-5" : "mt-2"
                        }`}
                >
                    -
                    {product.discountPercentage > 0
                        ? product.discountPercentage + "%"
                        : "₹" + product.discountPrice}
                </span>
            )}
            <div className="card-body">
                <h6 className="card-subtitle mb-2">
                    <Link to={product.link} className="text-decoration-none">

                        {product.name}
                    </Link>
                </h6>
                <div className="my-2">
                    <span className="font-weight-bold h5">₹{product.price}</span>
                    {product.originPrice > 0 && (
                        <del className="small text-muted ml-2">₹{product.originPrice}</del>
                    )}
                    <span className="ml-2">
                        {Array.from({ length: product.star }, (_, key) => (
                            <IconStarFill className="text-warning mr-1" key={key} />
                        ))}
                    </span>
                </div>
                <div className="btn-group btn-block" role="group">
                    {/* <button
                        type="button"
                        className="btn btn-sm btn-primary"
                        title="Add to cart"
                        onClick={() => (
                            AddToCart,
                            getRedirect(redirect)
                        )}

                    >
                        <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                     */}
                    {/* {showAddToCart(addCart)} */}
                    {/* <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                        title="Add to wishlist"
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default CardProductGrid;
