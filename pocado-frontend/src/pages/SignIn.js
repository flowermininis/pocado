import "./SignIn.css";
import logo_test from "../logos/logo_test.png";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import HeaderComponent from "../components/HeaderComponent";

function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return console.log("Logging in...");
  }

  return (
    <body className="signin-body">
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
          <form onSubmit={onSubmit}>
            <label htmlFor="username">Username:</label>
            <br></br>
            <input
              className="user-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={onChange}
            ></input>
            <br></br>
            <label htmlFor="password">Password:</label>
            <br></br>
            <input
              className="user-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={onChange}
            ></input>
            <br></br>
            <div id="submit-bttn-div">
              <input
                className="submit-button"
                type="submit"
                value="Log In"
              ></input>
            </div>
          </form>
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
