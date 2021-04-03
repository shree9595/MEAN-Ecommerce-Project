import React from "react";
import { Link, withRouter } from "react-router-dom";
import { isAutheticated, signout } from "../auth/helper";

// import nav from 'react-bootstrap/nav';
import { Navbar, Nav } from 'react-bootstrap'


const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history }) => (
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

    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/" className="text-success">DotLify Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav ">
        <Nav className="mr-auto">
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
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default withRouter(Menu);
