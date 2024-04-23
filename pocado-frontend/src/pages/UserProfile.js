import "./UserProfile.css";
import HeaderComponent from "../components/HeaderComponent";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getListings, reset } from "../features/listing/listingSlice";

function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { listings, isLoading, isError, message } = useSelector(
    (state) => state.listings
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getListings());

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  // if (isLoading) {
  //   console.log("Loading...");
  // }

  return (
    <body className="user-prof-body">
      <HeaderComponent></HeaderComponent>
      <div>
        {user ? (
          <div className="profile-body">
            <div>
              <h2>My profile</h2>
            </div>
            <div className="profile-info-div">
              <div id="pfp-cell">
                <img src={require("../images/" + user.pfp)} id="pfp-ex"></img>
              </div>
              <div id="un-cell">
                <div id="idk-un-n-bday">
                  <h3 id="username-h3">{user.username}</h3>
                  <p id="bsd-un">
                    {user.city}, {user.country}
                  </p>
                </div>
                <br></br>
                Birthday: {user.birthday}
                {/* <p> */}
                <br></br>
                {user.following} following {user.followers} followers
                {/* </p> */}
              </div>
              <div id="dos-cell">
                <a href="/edit-profile">
                  <button className="prof-button">Edit profile</button>
                </a>
                <a href={`/user/${user._id}`}>
                  <button className="prof-button">View public profile</button>
                </a>
              </div>
            </div>
            <div id="my-bio-div">
              <h3>My Bio</h3>
              <p>{user.bio}</p>
            </div>
            <div id="my-listings-div">
              <h3>My Lisitngs</h3>
              {listings.length > 0 ? (
                <div className="listings-map-item">
                  {listings.map((listing) => (
                    <div key={listing._id}>{listing.title}</div>
                  ))}
                </div>
              ) : (
                <h3>You have no listings!</h3>
              )}
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
