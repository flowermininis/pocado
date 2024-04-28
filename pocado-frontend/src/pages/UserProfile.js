import "./UserProfile.css";
import HeaderComponent from "../components/HeaderComponent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListings, reset } from "../features/listing/listingSlice";
import listings_hollow_heart from "../images/listings_hollow_heart.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function UserProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newListings, setNewListings] = useState([]);
  const [listingItems, setListingItems] = useState({ imgArr: [] });
  const { user } = useSelector((state) => state.auth);
  // const { stateNewListings, setStateNewListings } = useState(null);
  const { listings, isLoading, isError, message } = useSelector(
    (state) => state.listings
  );
  const LISTING_API_URL = "http://localhost:5000/api/listings/";
  const IMAGES_API_URL = "http://localhost:5000/api/upload/";

  // const { imgArr } = listingItems || {};
  const imgLinks = [];

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getListings());

    setNewListings(listings);

    console.log("help");

    // newListings.map((listing) => {
    //   // console.log(listing.image);
    //   if (listing.image) {
    //     return axios.get(IMAGES_API_URL + listing.image).then((response) =>
    //       // console.log("help")
    //       {
    //         // listing.image = response.data.name;
    //         setListingItems((prevState) =>
    //           // console.log(prevState)
    //           ({
    //             imgArr: [...prevState, response.data[0].name],
    //           })
    //         );
    //         // imgLinks.push(response.data[0].name);
    //       }
    //     );
    //   }

    // });
    // console.log(listingItems);

    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    console.log("Loading...");
  }

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
              <Zoom>
                <div id="pfp-cell">
                  <img src={require("../images/" + user.pfp)} id="pfp-ex"></img>
                </div>
              </Zoom>
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
              <h2>My Bio</h2>
              <p>{user.bio}</p>
            </div>
            <div id="my-listings-div">
              <h2>My Lisitngs</h2>
              {listings.length > 0 ? (
                <div className="listings-map-item">
                  {listings.map((listing) => (
                    <>
                      <div className="listing-item" key={listing._id}>
                        <a id="listi-a" href={"/listings/" + listing._id}>
                          <img
                            id="listing-img"
                            src={listings_hollow_heart}
                          ></img>
                        </a>
                        <div id="list-crd-inf">
                          <p>{listing.title}</p>
                          <p>${listing.price}</p>
                        </div>
                        <button type="button">delete</button>
                      </div>
                    </>
                  ))}
                  {/* <div>{listingItems && <p>{listingItems.imgArr[1]}</p>}</div> */}
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
