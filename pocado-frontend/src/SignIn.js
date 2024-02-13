import "./SignIn.css";
import HeaderComponent from "./HeaderComponent";

function SignIn() {
  return (
    <div>
      <HeaderComponent></HeaderComponent>
      <div>
        <p>please log in!</p>
        <label htmlFor="email-box">email:</label>
        <br></br>
        <input type="email" name="email-box"></input>
        <br></br>
        <label htmlFor="pw-box">password:</label>
        <br></br>
        <input type="password" name="pw-box"></input>
        <br></br>
        <input type="submit"></input>
      </div>
    </div>
  );
}

export default SignIn;
