import "./SignUp.css";
import HeaderComponent from "./HeaderComponent";
import logo_test from "./logos/logo_test.png";

function SignUp() {
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
            <br></br>
            <label htmlFor="email-box">Email</label>
            <br></br>
            <input
              className="user-input"
              type="email"
              name="email-box"
              placeholder="Your email address"
            ></input>
            <br></br>
            <label htmlFor="un-box">Username</label>
            <br></br>
            <input
              className="user-input"
              type="text"
              name="un-box"
              placeholder="Your preferred username"
            ></input>
            <br></br>
            <label htmlFor="pw-box">Password</label>
            <br></br>
            <input
              className="user-input"
              type="password"
              name="pw-box"
              placeholder="Your password"
            ></input>
            <br></br>
            <div id="submit-bttn-div">
              <input
                className="submit-button"
                type="submit"
                value="Create Account"
              ></input>
            </div>
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
