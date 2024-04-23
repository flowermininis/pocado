import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import "./PublicUserProfile.css";
import axios from "axios";

function PublicUserProfile() {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({});

  const API_URL = "http://localhost:5000/api/users/user/";

  useEffect(() => {
    axios
      .get(API_URL + id)
      .then(
        (response) => setUserInfo(response.data)
        // console.log("response.data: " + response.data),
        // console.log("userInfo: " + userInfo),
        // console.log("userInfo.pfp: " + userInfo.pfp)
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <body className="pbl-user-prof-body">
      <HeaderComponent></HeaderComponent>
      <div className="pbl-profile-body">
        <div>
          <h2>{userInfo.username}'s profile</h2>
        </div>
        <div className="pbl-profile-info-div">
          <div id="pfp-cell">
            {/* do this whenever u need to render something but its value is always intially undefined */}
            {userInfo.pfp && (
              <img src={require("../images/" + userInfo.pfp)} id="pfp-ex"></img>
            )}
          </div>
          <div id="pbl-un-cell">
            <div id="pbl-idk-un-n-bday">
              <h3 id="pbl-un-h3">{userInfo.username}</h3>
              <p id="pbl-bsd-un">
                {userInfo.city}, {userInfo.country}
              </p>
            </div>
            <br></br>
            Birthday: {userInfo.birthday}
            <br></br>
            {userInfo.following} following {userInfo.followers} followers
          </div>
          <div id="pbl-dos-cell">
            <button type="button" className="fllw-button">
              Follow
            </button>
          </div>
        </div>
        <div id="my-bio-div">
          <h3>My Bio</h3>
          <p>{userInfo.bio}</p>
        </div>
        <div id="my-bio-div">
          <h3>My Lisitngs</h3>
        </div>
      </div>
    </body>
  );
}

export default PublicUserProfile;
