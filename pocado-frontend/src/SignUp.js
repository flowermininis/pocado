import "./SignUp.css";
import HeaderComponent from "./HeaderComponent";

function SignUp() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div className="signup-div">
        <div className="inner-signup">
          <p>please sign up to continue!</p>
          <br></br>
          <label htmlFor="email-box">email:</label>
          <br></br>
          <input
            type="email"
            name="email-box"
            placeholder="Your email address"
          ></input>
          <br></br>
          <label htmlFor="un-box">username:</label>
          <br></br>
          <input type="text" name="un-box" placeholder="example123"></input>
          <br></br>
          <label htmlFor="pw-box">password:</label>
          <br></br>
          <input type="password" name="pw-box"></input>
          <br></br>
          <input type="submit"></input>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
