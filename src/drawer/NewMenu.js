import React, { useState, useContext, useEffect, useCallback } from "react";

import {
    SwipeableDrawer,
    Avatar,
    Divider,
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Link as MaterialLink
} from "@material-ui/core";

import {

    AccountCircle,
    Feedback,
    Info,
    FreeBreakfast,
    People,
    Settings
} from "@material-ui/icons";

import { isAutheticated, signout } from "../auth/helper";


// import { motion, AnimatePresence } from "framer-motion";

import { Link, withRouter } from "react-router-dom";

// import { GlobalContext } from "./GlobalState";
// import "./darkMode.css";
// import moon from "../images/moon-solid.svg";
// import sun from "../images/sun-solid.svg";


const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#2ecc72" };
    } else {
        return { color: "#FFFFFF" };
    }
};



const SwipeMenu = ({ open, history }) => {

    const { user } = isAutheticated()
    console.log("its", open);
    let kopen = open;
    //   const [{ menuOpen, themeSelectValue }, dispatch] = useContext(GlobalContext);
    const [menuOpen, setMenuOpen] = useState(!open)

    // const setMenuOpen = data => {
    //     // dispatch({ type: "setMenuOpen", snippet: data });
    //     return setMnuOpen(true)
    // };

    const setThemeSelectValue = useCallback(
        // data => {
        //   dispatch({ type: "setThemeSelectValue", snippet: data });
        // },
        // [dispatch]
    );

    const [isNight, setIsNight] = useState(false);

    useEffect(() => {
        // if (themeSelectValue === "Dark") {
        //   setIsNight(true);
        // } else {
        //   setIsNight(false);
        // }
    }, []);

    const changeTheme = theme => {
        setThemeSelectValue(theme);
        localStorage.setItem("selectedTheme", theme);
    };

    const handleThemeToggle = () => {
        if (!isNight) {
            changeTheme("Dark");
            setIsNight(false);
        } else {
            changeTheme("Default");
            setIsNight(true);
        }
    };
   

    return (
        <SwipeableDrawer
            open={menuOpen == open}
            onClose={() => setMenuOpen(!open)}
            onOpen={() => setMenuOpen(open)}
        >
            <div style={{ width: "300px" }}>
                <div
                    style={{
                        margin: "35px",
                        position: "relative",
                        width: "30px",
                        height: "30px"
                    }}
                >
                    <div>
                        <ListItemIcon>
                            <AccountCircle />

                            <h6 className="ml-3">{user && user.name}</h6>
                        </ListItemIcon>


                    </div>
                    {/* <AnimatePresence>
            <motion.img
              key={isNight ? sun : moon}
              initial={{ scale: 0 }}
              animate={{ scale: 1.5, rotate: "360deg" }}
              exit={{ scale: 0 }}
              // transition={{ duration: 0.5 }}
              src={isNight ? sun : moon}
              onClick={() => handleThemeToggle()}
              className="dayNightToggleBtn"
              alt="sun moon icon"
            />
          </AnimatePresence> */}
                </div>

                <Divider />

                <List
                    component="nav"
                    className={"pinkLists"}
                    onClick={() => setMenuOpen(false)}
                >
                    <ListItem button component={Link} to="/">
                        <ListItemIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                            </svg>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button component={Link} to="/cart">
                        <ListItemIcon>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </ListItemIcon>
                        <ListItemText primary="Cart" />
                    </ListItem>
                    {isAutheticated() && isAutheticated() && (
                        <ListItem button component={Link} to="/user/dashboard">
                            <ListItemIcon>
                                <People />
                            </ListItemIcon>
                            <ListItemText primary="User Dashboard" />
                        </ListItem>)}
                    {isAutheticated() && isAutheticated().user.role === 1 && (
                        <ListItem button component={Link} to="/admin/dashboard">
                            <ListItemIcon>
                                <FreeBreakfast />
                            </ListItemIcon>
                            <ListItemText primary="Admin DashBoard" />
                        </ListItem>
                    )}
                    {!isAutheticated() &&
                        <>
                            <ListItem button component={Link} to="/signup">
                                <ListItemIcon>
                                    <Info />
                                </ListItemIcon>
                                <ListItemText primary="Signup" />
                            </ListItem>
                            <ListItem button component={Link} to="/signin">
                                <ListItemIcon>
                                    <Info />
                                </ListItemIcon>
                                <ListItemText primary="Login" />
                            </ListItem>

                        </>
                    }
                    {isAutheticated() &&
                        <ListItem button component={Link} onClick={() => {

                            signout(() => {
                                history.push("/");

                            });
                        }}
                        >

                            <ListItemIcon>

                                <Info />
                            </ListItemIcon>
                            <ListItemText primary="SignOut" />
                        </ListItem>
                    }
                </List>.
            </div>
        </SwipeableDrawer>
    );
};

export default withRouter(SwipeMenu);
