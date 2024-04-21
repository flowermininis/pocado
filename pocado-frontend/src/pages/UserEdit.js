import HeaderComponent from "../components/HeaderComponent";
import "./UserEdit.css";
import { useSelector } from "react-redux";
import blue_cat_icon from "../images/blue_cat_icon.jpg";
import neopolitan_cat_icon from "../images/neopolitan_cat_icon.jpg";
import strawberry_roll_cat_icon from "../images/strawberry_roll_cat_icon.jpg";
import toast_cat_icon from "../images/toast_cat_icon.jpg";
import watermelon_cat_icon from "../images/watermelon_cat_icon.jpg";

function UserEdit() {
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
            <div>
              <div id="pfp-cell">
                <img src={toast_cat_icon} id="pfp-ex"></img>
              </div>
              <div>
                {/* <h3 id="username-h3">{user && user.username}</h3> */}
                <form>
                  <label for="username">Username:</label>
                  <br></br>
                  <input type="text"></input>
                  <br></br>
                  <label for="pfp">Profile picture</label>
                  <br></br>
                  <div id="pfp-choice-sect">
                    <button
                      type="button"
                      className="pfp-choice-div"
                      id="pfp-choice-1"
                    ></button>
                    <button
                      type="button"
                      className="pfp-choice-div"
                      id="pfp-choice-2"
                    ></button>
                    <button
                      type="button"
                      className="pfp-choice-div"
                      id="pfp-choice-3"
                    ></button>
                    <button
                      type="button"
                      className="pfp-choice-div"
                      id="pfp-choice-4"
                    ></button>
                    <button
                      type="button"
                      className="pfp-choice-div"
                      id="pfp-choice-5"
                    ></button>
                  </div>
                  <br></br>
                  <label for="birthday">Birthday</label>
                  <br></br>
                  <input name="birthday"></input>
                  <br></br>
                  <label for="bio">Biography</label>
                  <br></br>
                  <textarea
                    name="bio"
                    cols="50"
                    rows="10"
                    placeholder="ex: brand new photocard in mint condition, comes triple-sleeved with free toploader"
                  ></textarea>
                  <br></br>
                  <label for="city">City</label>
                  <br></br>
                  <input name="city"></input>
                  <br></br>
                  <label for="country">Country</label>
                  <br></br>
                  <select name="country">
                    <option value="United States">United States</option>
                  </select>
                  <br></br>
                </form>

                {/* <br></br> */}
                {/* <p>0 following 0 followers</p> */}
              </div>
              {/* <div id="dos-cell">
                <a href="/account-settings">
                  <button id="prof-button">Edit profile</button>
                </a>
                <button id="prof-button">View public profile</button>
              </div> */}
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
