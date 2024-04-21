import "./SignUp.css";
import HeaderComponent from "../components/HeaderComponent";
import logo_test from "../logos/logo_test.png";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { register, reset } from "../features/auth/authSlice";
import { Spinner } from "../components/Spinner";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

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
      email,
      password,
    };

    dispatch(register(userData));
  };

  if (isLoading) {
    return console.log("loading...");
  }

  return (
    <html>
      <body className="page-body">
        <div className="logo-div">
          <a href="/">
            <img id="logo-svg" src={logo_test} />
          </a>
        </div>
        <div className="signup-div">
          <div className="inner-signup">
            <div id="signup-mssg-div">
              <h2>Registration</h2>
            </div>
            <form onSubmit={onSubmit}>
              <br></br>
              <label htmlFor="username">Username</label>
              <br></br>
              <input
                className="user-input"
                type="text"
                name="username"
                placeholder="Your preferred username"
                value={username}
                onChange={onChange}
              ></input>
              <br></br>
              <label htmlFor="email">Email</label>
              <br></br>
              <input
                className="user-input"
                type="email"
                name="email"
                placeholder="Your email address"
                value={email}
                onChange={onChange}
              ></input>
              <br></br>
              <label htmlFor="password">Password</label>
              <br></br>
              <input
                className="user-input"
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onChange={onChange}
              ></input>
              <br></br>
              <div id="submit-bttn-div">
                <input
                  className="submit-button"
                  type="submit"
                  value="Create Account"
                ></input>
              </div>
            </form>
            <div>
              <h5>
                Already have an account?{" "}
                <a id="signin-msg-link" href="/sign-in">
                  Log in!
                </a>
              </h5>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default SignUp;
