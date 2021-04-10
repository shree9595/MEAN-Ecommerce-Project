import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import { addAddressToCart, EmptyAddress, loadAddress } from "../core/helper/cartHelper";



const UpdateAddressForm = ({ onSubmit }) => {
    const [values, setValues] = useState({
        fullname: "",
        address: "",
        pin: "",
        contact: "",
        state: "",
        city: "",
    });

    const [alladdress, setAllAddress] = useState([]);

    const { fullname, address, pin, contact, city, state } = values;


    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });


    };

    const localAddress = loadAddress()

    useEffect(() => {
        preload()
    }, [])

    console.log("add", localAddress[0].fullname);

    const preload = () => {
        setValues({
            ...values,
            fullname: localAddress[0].fullname,
            address: localAddress[0].address,
            pin: localAddress[0].pin,
            contact: localAddress[0].contact,
            city: localAddress[0].city,
            state: localAddress[0].state,
        })
    }


    async function onRegister() {
        EmptyAddress()
        addAddressToCart(values)


    }

    // const [password, setPassword] = useState("");
    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="fullname"
                    placeholder="Enter name"
                    value={fullname}
                    onChange={handleChange("fullname")}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                    type="contact"
                    placeholder="Enter Number"
                    value={contact}
                    onChange={handleChange("contact")}
                    required

                />

            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control
                    type="address"
                    placeholder="Enter Address"
                    value={address}
                    onChange={handleChange("address")}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Pin Code</Form.Label>
                <Form.Control
                    type="pin"
                    placeholder="Enter Pin Code"
                    value={pin}
                    onChange={handleChange("pin")}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control
                    type="city"
                    placeholder="Enter city"
                    value={city}
                    onChange={handleChange("city")}
                    required

                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>State</Form.Label>
                <Form.Control
                    type="state"
                    placeholder="state"
                    value={state}
                    onChange={handleChange("state")}
                    required
                />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me!" />
            </Form.Group> */}
            <Button onClick={() => {
                onRegister()
            }}
                variant="primary" type="submit" block>
                Submit
      </Button>
        </Form>
    );
};

export default function App(setReload = (f) => f,
    //   function(f){return f}
    reload = undefined,) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onLoginFormSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <>

            <div
            // className="d-flex align-items-center justify-content-center"
            // style={{ height: "100vh" }}
            >
                <Button variant="primary" onClick={handleShow}>
                    Update Address

        </Button>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Address Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <UpdateAddressForm onSubmit={() => {
                        onLoginFormSubmit();
                        setReload(!reload);

                    }} />
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close Modal
          </Button> */}
                </Modal.Footer>
            </Modal>

        </>
    );
}