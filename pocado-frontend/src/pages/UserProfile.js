import "./UserProfile.css";
import HeaderComponent from "../components/HeaderComponent";
import { useSelector } from "react-redux";
import jin_pfp from "../images/jin_pfp.jpg";

function UserProfile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <body>
      <HeaderComponent></HeaderComponent>
      <div>
        {user ? (
          <div className="profile-body">
            <div>
              <h2>My profile</h2>
            </div>
            <div className="profile-info-div">
              <div id="pfp-cell">
                <img src={jin_pfp} id="pfp-ex"></img>
              </div>
              <div id="un-cell">
                <h3 id="username-h3">{user && user.username}</h3>
                <br></br>
                <p>0 following 0 followers</p>
              </div>
              <div id="dos-cell">
                <a href="/edit-profile">
                  <button id="prof-button">Edit profile</button>
                </a>
                <button id="prof-button">View public profile</button>
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

export default UserProfile;
