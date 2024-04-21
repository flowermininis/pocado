import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import HeaderComponent from "../components/HeaderComponent";
import prof_pfp from "../images/strawberry_roll_cat_icon.jpg";
import axios from "axios";

function PublicUserProfile() {
  //   const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const API_URL = "http://localhost:5000/api/users/user/";

  useEffect(() => {
    axios
      .get(API_URL + id)
      .then(
        (response) => (setUserInfo(response.data), console.log(response.data))
      );
  }, []);

  return (
    <body>
      <HeaderComponent></HeaderComponent>
      <div>
        <div className="usr-profile-body">
          <div>
            <h2>{userInfo.username}'s profile</h2>
          </div>
          <div className="prf-inf-div">
            <div id="pfp-cell">
              <img src={prof_pfp} id="pfp-ex"></img>
            </div>
            <div id="un-n-fl">
              <h3 id="un-h3">{userInfo.username}</h3>
              <br></br>
              <p>0 following 0 followers</p>
            </div>
            <div id="btns">
              <a href="/account-settings">
                <button id="fllw-btn">Follow</button>
              </a>
            </div>
          </div>
        </div>
        {/* <button>hi</button> */}
      </div>
    </body>
  );
}

export default PublicUserProfile;
