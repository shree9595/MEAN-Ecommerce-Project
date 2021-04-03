import React from "react";
import { Link } from "react-router-dom";
import Base from "../core/Base";



function UserDashBoard() {

  const RightSide = () => {
    return (
      <div className="card fixed" >
        <h4 className="card-header bg-dark text-white fixed">Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item fixed">
            <Link to="/user/dashboard/profile" className="nav-link text-success ">
              Profile
            </Link>
          </li>
          <li className="list-group-item fixed">
            <Link to="/user/dashboard/order" className="nav-link text-success ">
              My Orders
            </Link>
          </li>
          <li className="list-group-item fixed">
            <Link to="/user/dashboard/address" className="nav-link text-success ">
              Address
            </Link>
          </li>
          <li className="list-group-item fixed">
            <Link to="/admin/create/category" className="nav-link text-success ">
              My Card
            </Link>
          </li>
        </ul>
      </div>

    )

  }
  const LeftSide = () => {
    return (
      <h3>Profile Section </h3>
    )

  }


  return (
    <Base>
      <div className="text-center">{RightSide()}</div>



    </Base>
  );
}

export default UserDashBoard;
