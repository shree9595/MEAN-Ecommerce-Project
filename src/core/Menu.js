import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAutheticated, signout } from "../auth/helper";
import NavbarDrawer from "../drawer/NewMenu";

import {
  withStyles,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Slide
} from "@material-ui/core/";


// import nav from 'react-bootstrap/nav';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import SwipeMenu from "../drawer/NewMenu";
import { Menu, Search } from "@material-ui/icons/";
import { loadCart } from "./helper/cartHelper";


const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};





const MenuBar = ({ history, setMenuOpen }) => {

  const [open, setOpen] = useState()
  const [state, setstate] = useState([])

  useEffect(() => {
    setstate(loadCart())
  }, [])





  return (


    <div>



      {/* <ul className="nav nav-tabs bg-dark">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          Cart
        </Link>
      </li>
      {isAutheticated() && isAutheticated() && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/user/dashboard")}
            className="nav-link"
            to="/user/dashboard"
          >
            Dashboard
          </Link>
        </li>
      )}
      {isAutheticated() && isAutheticated().user.role === 1 && (
        <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            Admin Dashboard
          </Link>
        </li>
      )}

      {!isAutheticated() && (
        <>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signup")}
              className="nav-link"
              to="/signup"
            >
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/signin")}
              className="nav-link"
              to="/signin"
            >
              Sign In
            </Link>
          </li>
        </>
      )}
      {isAutheticated() && (
        <li className="nav-item">
          <span
            className="nav-link text-warning"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </span>
        </li>
      )}
    </ul>
 */}

      <Navbar bg="dark" expand="lg"  >
        <IconButton
          color="#000000"
          aria-label="Menu"
          onClick={() => { setOpen(!open) }}
        >
          <Menu style={{ color: "#ffffff" }} />

        </IconButton>

        <SwipeMenu open={open} />


        <Navbar.Brand href="/" className="text-success justify-content-center">DotLify Store
      {/* <svg viewBox="0 0 24 24" id="close" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.656l5.377-5.378a.95.95 0 011.345 1.345L13.344 12l5.378 5.377a.95.95 0 11-1.345 1.345L12 13.344l-5.377 5.378a.95.95 0 11-1.345-1.345L10.656 12 5.278 6.623a.95.95 0 011.345-1.345L12 10.656z"></path></svg> */}
          <i className="bi bi-cart"></i>
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
          <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z" />
          <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z" />
        </svg> */}


        </Navbar.Brand>
        <Navbar className="justify-content-end fixed">


          {/* <Nav className="justify-content-end">
            <Nav.Link href="#home" className="text-white justify-content-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
              </svg>


            </Nav.Link>
          </Nav> */}

          <Nav className="justify-content-end ">
            <Nav.Link href="/cart" className="text-white justify-content-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
              <i className="fa badgeCart" style={{ fontSize: "20px" }} value={state && state.length}> </i>
            </Nav.Link>
          </Nav>
        </Navbar>

        {/* <Navbar.Toggle style={{ color: "#ffffff" }} aria-controls="basic-navbar-nav" className="justify-content-end" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          <Nav className="mr-auto navbar-left justify-content-end">
            <Nav.Link style={currentTab(history, "/")} href="/">Home</Nav.Link>
            <Nav.Link style={currentTab(history, "/cart")} href="/cart">Cart</Nav.Link>
            {isAutheticated() && isAutheticated() && (
              <Nav.Link style={currentTab(history, "/user/dashboard")} href="/user/dashboard">Dashboard</Nav.Link>

            )}
            {isAutheticated() && isAutheticated().user.role === 1 && (
              <Nav.Link style={currentTab(history, "/admin/dashboard")} href="/admin/dashboard"> Admin Dashboard</Nav.Link>
            )}

            {!isAutheticated() && (
              <>
                <Nav.Link style={currentTab(history, "/signup")} href="/signup">SignUp</Nav.Link>
                <Nav.Link style={currentTab(history, "/signin")} href="/signin">Signin</Nav.Link>
              </>
            )}
            {isAutheticated() &&
              <Nav.Link
                className="nav-link text-warning"
                onClick={() => {

                  signout(() => {
                    history.push("/");
                  });
                }} >SignOut</Nav.Link>
            }

          </Nav>
          <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse> */}



        {/* <NavDropdown title="Dropdown"  id="basic-nav-dropdown">
      <Nav className="justify-content-end">
          <Nav.Link href="#home" className="text-white justify-content-end">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </Nav.Link>
        </Nav>
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
      </Navbar>

    </div>
  );
}
export default withRouter(MenuBar);



