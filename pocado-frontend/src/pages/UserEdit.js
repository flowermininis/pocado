import HeaderComponent from "../components/HeaderComponent";
import "./UserEdit.css";
import { useSelector } from "react-redux";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
// import blue_cat_icon from "../images/blue_cat_icon.jpg";
// import neopolitan_cat_icon from "../images/neopolitan_cat_icon.jpg";
// import strawberry_roll_cat_icon from "../images/strawberry_roll_cat_icon.jpg";
// import toast_cat_icon from "../images/toast_cat_icon.jpg";
// import watermelon_cat_icon from "../images/watermelon_cat_icon.jpg";

function UserEdit() {
  const { user } = useSelector((state) => state.auth);
  const API_URL = "http://localhost:5000/api/users/user/";
  let pfpString = "";

  useEffect(() => {
    document.getElementById("pfp-upd-btn").disabled = true;
  }, []);

  const [username, setUsername] = useState("");
  // const [pfp, setPfp] = useState("");
  const [birthday, setBirthday] = useState("");
  const [bio, setBio] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const blueCatCLick = () => {
    pfpString = "blue_cat_icon.jpg";
    console.log(pfpString);
    document.getElementById("pfp-upd-btn").disabled = false;
    // console.log("user.id: " + user._id);
  };
  const neopCatCLick = () => {
    pfpString = "neopolitan_cat_icon.jpg";
    console.log(pfpString);
    document.getElementById("pfp-upd-btn").disabled = false;
  };

  const strbrryCatCLick = () => {
    pfpString = "strawberry_roll_cat_icon.jpg";
    console.log(pfpString);
    document.getElementById("pfp-upd-btn").disabled = false;
  };

  const toastCatCLick = () => {
    pfpString = "toast_cat_icon.jpg";
    console.log(pfpString);
    document.getElementById("pfp-upd-btn").disabled = false;
  };

  const wtrmlnCatCLick = () => {
    pfpString = "watermelon_cat_icon.jpg";
    console.log(pfpString);
    document.getElementById("pfp-upd-btn").disabled = false;
  };

  // const updatePfpString = () => {
  //   axios.patch(API_URL + user._id);
  // };

  const usernameChange = (e) => {
    setUsername(e.target.value);
  };

  const birthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  const bioChange = (e) => {
    setBio(e.target.value);
  };

  const cityChange = (e) => {
    setCity(e.target.value);
  };

  const countryChange = (e) => {
    setCountry(e.target.value);
  };

  const usernameSubmit = (e) => {
    e.preventDefault();
    axios
      .patch(API_URL + user._id, {
        username: username,
      })
      .then((response) =>
        localStorage.setItem("user", JSON.stringify(response.data))
      )
      .catch((error) => console.error(error));
  };

  const pfpSubmit = (e) => {
    // e.preventDefault();
    axios
      .patch(API_URL + user._id, {
        pfp: pfpString,
      })
      .then((response) =>
        localStorage.setItem("user", JSON.stringify(response.data))
      )
      .catch((error) => console.error(error));
  };

  const birthdaySubmit = (e) => {
    e.preventDefault();
    axios
      .patch(API_URL + user._id, {
        birthday: birthday,
      })
      .then((response) =>
        localStorage.setItem("user", JSON.stringify(response.data))
      )
      .catch((error) => console.error(error));
  };

  const bioSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(API_URL + user._id, {
        bio: bio,
      })
      .then((response) =>
        localStorage.setItem("user", JSON.stringify(response.data))
      )
      .catch((error) => console.error(error));
  };

  const citySubmit = (e) => {
    e.preventDefault();
    axios
      .patch(API_URL + user._id, {
        city: city,
      })
      .then((response) =>
        localStorage.setItem("user", JSON.stringify(response.data))
      )
      .catch((error) => console.error(error));
  };

  const countrySubmit = (e) => {
    e.preventDefault();
    axios
      .patch(API_URL + user._id, {
        country: country,
      })
      .then((response) =>
        localStorage.setItem("user", JSON.stringify(response.data))
      )
      .catch((error) => console.error(error));
  };

  return (
    <body id="usr-edt-body">
      <HeaderComponent></HeaderComponent>
      <div>
        {user ? (
          <div className="profile-body">
            <div>
              <h2>My profile</h2>
            </div>
            <div>
              <div id="pfp-cell">
                <img src={require("../images/" + user.pfp)} id="pfp-ex"></img>
              </div>
              <div>
                {/* <h3 id="username-h3">{user && user.username}</h3> */}
                <form>
                  <label for="username">Username:</label>
                  <br></br>
                  <input
                    id="usern-inp-edit"
                    className="usr-edt-inp"
                    type="text"
                    value={username}
                    onChange={usernameChange}
                    placeholder={user.username}
                  ></input>
                  <button
                    id="un-sbm-btn"
                    className="usr-prof-upd-btn"
                    onClick={usernameSubmit}
                  >
                    Update
                  </button>
                  <br></br>
                  <label for="pfp">Profile picture:</label>
                  <br></br>
                  <div id="pfp-choice-sect">
                    <button
                      type="button"
                      className="pfp-choice-div"
                      id="pfp-choice-1"
                      onClick={blueCatCLick}
                    ></button>
                    <button
                      type="button"
                      className="pfp-choice-div"
                      id="pfp-choice-2"
                      onClick={neopCatCLick}
                    ></button>
                    <button
                      type="button"
                      className="pfp-choice-div"
                      id="pfp-choice-3"
                      onClick={strbrryCatCLick}
                    ></button>
                    <button
                      type="button"
                      className="pfp-choice-div"
                      id="pfp-choice-4"
                      onClick={toastCatCLick}
                    ></button>
                    <button
                      type="button"
                      className="pfp-choice-div"
                      id="pfp-choice-5"
                      onClick={wtrmlnCatCLick}
                    ></button>
                    <button
                      className="usr-prof-upd-btn"
                      id="pfp-upd-btn"
                      onClick={pfpSubmit}
                    >
                      Update
                    </button>
                  </div>
                  <br></br>
                  <label for="birthday">Birthday:</label>
                  <br></br>
                  <input
                    className="usr-edt-inp"
                    name="birthday"
                    value={birthday}
                    onChange={birthdayChange}
                    placeholder={user.birthday}
                  ></input>
                  <button className="usr-prof-upd-btn" onClick={birthdaySubmit}>
                    Update
                  </button>
                  <br></br>
                  <label for="bio">Biography:</label>
                  <br></br>
                  <textarea
                    id="usr-edit-bio"
                    name="bio"
                    cols="50"
                    rows="10"
                    placeholder={user.bio}
                    value={bio}
                    onChange={bioChange}
                  ></textarea>
                  <button
                    className="usr-prof-upd-btn"
                    id="bio-btn"
                    onClick={bioSubmit}
                  >
                    Update
                  </button>
                  <br></br>
                  <label for="city">City:</label>
                  <br></br>
                  <input
                    className="usr-edt-inp"
                    name="city"
                    value={city}
                    onChange={cityChange}
                    placeholder={user.city}
                  ></input>
                  <button className="usr-prof-upd-btn" onClick={citySubmit}>
                    Update
                  </button>
                  <br></br>
                  <label for="country">Country:</label>
                  <br></br>
                  <select
                    name="country"
                    id="ctry-sel"
                    value={country}
                    onChange={countryChange}
                  >
                    <option value="United States">United States</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                  <button className="usr-prof-upd-btn" onClick={countrySubmit}>
                    Update
                  </button>
                  <br></br>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="profile-body">
            <h1>Please log in to see this page!</h1>
          </div>
        )}
      </div>
    </body>
  );
}

export default UserEdit;
