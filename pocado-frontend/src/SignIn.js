import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./SignIn.css";
import HeaderComponent from "./HeaderComponent";
import logo_test from "./logos/logo_test.png";

function SignIn() {
  return (
    <body className="signin-body">
      {/* <HeaderComponent></HeaderComponent> */}
      <div className="logo-div">
        <a href="/">
          <img id="logo-svg" src={logo_test} />
        </a>
      </div>
      <div className="signin-div">
        <div className="inner-signin">
          <div id="signin-mssg-div">
            <h2>Sign in</h2>
          </div>
          <br></br>
          <label htmlFor="email-box">Email:</label>
          <br></br>
          <input
            className="user-input"
            type="email"
            name="email-box"
            placeholder="Enter your email address"
          ></input>
          <br></br>
          <label htmlFor="pw-box">Password:</label>
          <br></br>
          <input
            className="user-input"
            type="password"
            name="pw-box"
            placeholder="Enter your password"
          ></input>
          <br></br>
          <div id="submit-bttn-div">
            <input
              className="submit-button"
              type="submit"
              value="Log In"
            ></input>
          </div>
          <div>
            <h5>
              Don't have an account?{" "}
              <a id="signup-msg-link" href="/sign-up">
                Sign up!
              </a>
            </h5>
          </div>
        </div>
      </div>
    </body>
  );
}

export default SignIn;
