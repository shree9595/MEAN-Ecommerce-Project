import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AdminDashBoard from "./user/AdminDashBoard";
import UserDashBoard from "./user/UserDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";

import UpdateThisProduct from "./admin/UpdateProduct"
import UpdateCategory from "./admin/UpdateCategory"
import Cart from "./core/cart"
import ProductDetail from "./core/ProductDetail";
import PaymentSuccess from "./payment/PaymentSuccess";
import MyOrders from "./userDashboard/MyOrders";
import Address from "./userDashboard/Address";
import Profile from "./userDashboard/Profile";
import MyALLOrders from "./admin/Orders";
import CartView from "./cart/Cart";
import CheckoutView from "./cart/Checkout";



function Routes() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/cart" exact component={CartView} />
          <Route path="/payment/success" exact component={PaymentSuccess} />

          <Route path="/productDetail/cart" exact component={CartView} />
          <Route path="/productDetail/:productId" exact component={ProductDetail} />
          <PrivateRoute
            path="/user/dashboard"
            exact
            component={UserDashBoard}
          />
          <PrivateRoute
            path="/user/dashboard/order"
            exact
            component={MyOrders}
          />
          <PrivateRoute
            path="/user/dashboard/address"
            exact
            component={Address}
          />
          <PrivateRoute
            path="/user/dashboard/profile"
            exact
            component={Profile}
          />
          <PrivateRoute
            path="/payment/success"
            exact
            component={PaymentSuccess}
          />
          <PrivateRoute
            path="/checkout"
            exact
            component={CheckoutView}
          />
          <AdminRoute
            path="/admin/dashboard"
            exact
            component={AdminDashBoard}
          />
          <AdminRoute
            path="/admin/create/category"
            exact
            component={AddCategory}
          />
          <AdminRoute
            path="/admin/categories"
            exact
            component={ManageCategories}
          />
          <AdminRoute
            path="/admin/create/product"
            exact
            component={AddProduct}
          />
          <AdminRoute
            path="/admin/products"
            exact
            component={ManageProducts}
          />
          <AdminRoute
            path="/admin/orders"
            exact
            component={MyALLOrders}
          />
          <AdminRoute
            path="/admin/product/update/:productId"
            exact
            component={UpdateThisProduct}
          />
          <AdminRoute
            path="/admin/category/update/:categoryId"
            exact
            component={UpdateCategory}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
