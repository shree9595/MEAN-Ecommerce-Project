import React from "react";
import { API } from "../../Backend";

const ImageHelper = ({product}) => {
  const imageURl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div>
      <img
        src={imageURl}
        alt="photo"
        style={{ height: 180, maxWidth: "100%" }}
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
