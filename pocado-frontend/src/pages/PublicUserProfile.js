import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import listings_hollow_heart from "../images/listings_hollow_heart.jpg";
import "./PublicUserProfile.css";
import axios from "axios";

function PublicUserProfile() {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({});
  const [userListings, setUserListings] = useState([]);
  const [imgLinks, setImgLinks] = useState({ imgArr: [] });
  const [lstImg, setLstImg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LISTING_API_URL = "http://localhost:5000/api/listings/user/";
  const IMAGES_API_URL = "http://localhost:5000/api/upload/";
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

    axios
      .get(LISTING_API_URL + id)
      .then(
        (response) => {
          setUserListings(response.data);
          // console.log("response.data: " + response.data);
        }
        // console.log("userInfo: " + userInfo),
        // console.log("userInfo.pfp: " + userInfo.pfp)
      )
      .catch((error) => console.error(error));

    // console.log("before map....");
    // userListings.map((listing) => {
    //   console.log("inside map before set....");
    //   setLstImg(listing.image);
    //   // if (lstImg) {
    //   axios.get(IMAGES_API_URL + lstImg).then((response) => {
    //     console.log(response);
    //     setImgLinks((prevState) =>
    //       // console.log(prevState)
    //       ({
    //         imgArr: [...prevState.imgArr, response.data[0].name],
    //       })
    //     );
    //   });
    //   // }
    // });
  }, []);

  console.log(imgLinks.imgArr);

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
          <h2>My Bio</h2>
          <p>{userInfo.bio}</p>
        </div>
        <div id="my-bio-div">
          {/* <h3>My Lisitngs</h3> */}
          <div id="pup-my-listings-div">
            <h2>My Lisitngs</h2>
            {userListings.length > 0 ? (
              <div className="pup-listings-map-item">
                {userListings.map((listing) => (
                  <a id="pup-listi-a" href={"/listings/" + listing._id}>
                    <div className="pup-listing-item" key={listing._id}>
                      <img
                        id="pup-listing-img"
                        src={listings_hollow_heart}
                      ></img>
                      <div id="pup-list-crd-inf">
                        <p>{listing.title}</p>
                        <p>${listing.price}</p>
                      </div>
                      {/* <p>{listing.image}</p> */}
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <h3>No listings found! {":("}</h3>
            )}
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </body>
  );
}

export default PublicUserProfile;
