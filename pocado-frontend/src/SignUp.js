import "./SignUp.css";
import HeaderComponent from "./HeaderComponent";
import logo_test from "./logos/logo_test.png";

function SignUp() {
  return (
    <body className="page-div">
      <div className="logo-div">
        <img id="logo-svg" src={logo_test} />
      </div>
      <div className="signup-div">
        <div className="inner-signup">
          <div id="signup-mssg-div">
            <h2>Registration</h2>
          </div>
          <br></br>
          <label htmlFor="email-box">Email:</label>
          <br></br>
          <input
            className="user-input"
            type="email"
            name="email-box"
            placeholder="Your email address"
          ></input>
          <br></br>
          <label htmlFor="un-box">Username:</label>
          <br></br>
          <input
            className="user-input"
            type="text"
            name="un-box"
            placeholder="example123"
          ></input>
          <br></br>
          <label htmlFor="pw-box">Password:</label>
          <br></br>
          <input className="user-input" type="password" name="pw-box"></input>
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
              Already have an account? <a href="/home">Log in!</a>
            </h5>
          </div>
        </div>
      </div>
    </body>
  );
}

export default SignUp;
