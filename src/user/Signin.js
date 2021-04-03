import React, { useState, useEffect } from "react";
import Base from "../core/Base";
import { Link, Redirect, useHistory } from "react-router-dom";
import { signin, authenticate, isAutheticated } from "../auth/helper";
import firebase from '../firebase'
import app from 'firebase/app'

import 'firebase/auth'
import 'firebase/firebase-firestore'

const Signin = () => {
  const [values, setValues] = useState({
    email: "samasun@sasm.com",
    // "b@shree.com",
    last: "",
    password: "123456",
    error: "",
    loading: false,
    didRedirect: false,
  });



  const { email, last, password, error, loading, didRedirect } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });


  };
  const [quote, setQuote] = useState('')
  const { displayName,
  } = isAutheticated()

  const { refreshToken
  } = isAutheticated()

  console.log("rf", refreshToken);



  const signInWithGoogle = async (event) => {
    event.preventDefault();
    await firebase.googleLogin()

    // .then(function (result) {
    //   // Google user signed in. Check if phone number added.
    //   if (!result.user.phoneNumber) {
    //     // Ask user for phone number.
    //     var phoneNumber = window.prompt('Provide your phone number');
    //     // You also need to provide a button element signInButtonElement
    //     // which the user would click to complete sign-in.
    //     // Get recaptcha token. Let's use invisible recaptcha and hook to the button.
    //     var appVerifier = new app.auth.RecaptchaVerifier(
    //       "rectapcha-container", { size: 'invisible' });
    //     // This will wait for the button to be clicked the reCAPTCHA resolved.
    //     return result.user.linkWithPhoneNumber(phoneNumber, appVerifier)
    //       .then(function (confirmationResult) {
    //         // Ask user to provide the SMS code.
    //         var code = window.prompt('Provide your SMS code');
    //         // Complete sign-in.
    //         return confirmationResult.confirm(code);
    //       })
    //   }
    // })

    let { email } = firebase.getCurrentUser()
    const password = '123456'

    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: true });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));

    // let ok = firebase.getCurrentUser()
    // authenticate(ok, () => {
    //   setValues({
    //     ...values,
    //     didRedirect: true,
    //   });
    // });
  }



  const signInWithFacebook = async (event) => {
    event.preventDefault();
    await firebase.facebookLogin()
    let ok = firebase.getCurrentUser()
    let { email } = firebase.getCurrentUser()
    const password = '123456'


    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: true });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));

    // authenticate(ok, () => {
    //   setValues({
    //     ...values,
    //     didRedirect: true,
    //   });
    // });
  }

  async function login(event) {
    try {
      event.preventDefault();
      await firebase.login(email, password)

      let ok = firebase.getCurrentUser()
      let oTken = firebase.getToken()

      console.log("MS TOKEN", oTken);
      let disName = firebase.getCurrentUser().displayName


      authenticate(ok, () => {
        setValues({
          ...values,
          didRedirect: true,
        });
      });

      firebase.getCurrentUserQuote().then(setQuote)


      console.log("logIn succcessask");

    } catch (error) {
      alert(error.message)
    }
  }



  useEffect(() => {


    console.log(quote);
    // firebase.getCurrentUserQuote().then(setQuote)
    // firebase.getCurrentUserQuote().then(
    //   setValues({ ...values, last })
    // )
  })

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: true });
        } else {
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("signin request failed"));
  };



  // if (user) {
  //   // User is signed in.
  // } else {
  //   // No user is signed in.
  // }

  const performRedirect = () => {
    if (didRedirect) {
      if (displayName) {
        return <Redirect to="/productDetail/cart" />
      } else {
        return <Redirect to="/" />
      }
    }
    if (isAutheticated()) {
      return <Redirect to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
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

  const signInForm = () => {
    return (
      <div className="row">

        <div className="col-md-6 offset-sm-3 text-left">
          <h3>Login to Dashboard</h3>
          {/* <form>
            <div id="rectapcha-container"></div>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                onChange={handleChange("email")}
                className="form-control"
                type="email"
                value={email}
              />
            </div>
            <div className="form-group">
              <label className="text-dark">password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                className="form-control"
                type="password"
              />
            </div>
            <button onClick={login} className="btn btn-success btn-block ">
              submit
            </button>

          </form>

          <h5 className="text-center">OR</h5> */}


          <br></br>

          {/* <button type="button"
            color="white"
            rounded
            className="z-depth-1a">
            <div fab icon="google-plus-g" className="blue-text">  Nokai   </div>
          </button> */}
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
    );
  };

  return (
    <Base title="Sign In Page" description="a page for user sign in">

      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
      {/* <p className="text-white text-center">{JSON.stringify(values)}</p> */}
    </Base>
  );
};

export default Signin;
