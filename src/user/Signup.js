import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper/index";
import firebase from '../firebase'



const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    last: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  const { name, email, password, error, success, last, role } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };





  async function onRegister() {
    try {
      await firebase.register(name, email, password, role)
      await firebase.addQuote(last)

      signup({ name, email, password })
        .then((data) => {
          if (data.error) {
            setValues({ ...values, error: data.error, success: false });
          } else {
            setValues({
              ...values,
              name: "",
              email: "",
              password: "",
              error: "",
              success: true,
            });
          }
        }).catch(console.log("Error in signup"));

      // props.history.replace('/dashboard')
      console.log("log successfukyy");
    } catch (error) {
      alert(error.message)
    }
  }

  const signInWithGoogle = async (event) => {
    event.preventDefault();
    await firebase.googleLogin()

    const password = '123456'


    let { displayName, email } = firebase.getCurrentUser()


    signup({ name: displayName, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    })
      .catch(console.log("Error in signup"));


    //let { displayName, email, } = firebase.getCurrentUser()



  }


  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div className="container">
            <div className="box">
              <h3>SignUp Page</h3>
              {/* <form onSubmit={e => e.preventDefault() && false}>
            <div className="form-group">
              <label className="text-dark">name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">last</label>
              <input
                className="form-control"
                onChange={handleChange("last")}
                type="text"
                value={last}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">role</label>
              <input
                className="form-control"
                onChange={handleChange("role")}
                type="text"
                value={role}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">password</label>
              <input
                className="form-control"
                onChange={handleChange("password")}
                type="password"
                value={password}
              />
            </div>
            <button onClick={onRegister} className="btn btn-success btn-block ">
              submit
            </button>
          </form> */}
              <br>

              </br>
              <div className="card">
                <div className="card-body ">

                  <div className="login-buttons text-center" >
                    <button className="login-provider-button" onClick={signInWithGoogle}>
                      <img src="https://developers.google.com/identity/images/g-logo.png" height="30" alt="google icon" />
                      <span> Sign in with Google</span>

                    </button>

                  </div>

                </div>

                {/* <button className="login-provider-button" onClick={signInWithFacebook}>
              <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon" />
              <span> Continue with Facebook</span>
            </button> */}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account was created successfully. Please
            <Link to="/signin">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sign Up Page" description="a page for user sign in">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}

      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </Base>
  );
};

export default Signup;
