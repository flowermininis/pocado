import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ListingDetails.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState([]);
  const [userId, setUserId] = useState([]);
  const [user, setUser] = useState([]);
  const [image, setImage] = useState([]);
  // setting this to null worked omg
  const [imageName, setImageName] = useState(null);
  // setImage;
  const LISTING_API_URL = "http://localhost:5000/api/listings/";
  const IMAGE_API_URL = "http://localhost:5000/api/upload/";
  const USER_API_URL = "http://localhost:5000/api/users/user/";

  useEffect(() => {
    axios
      .get(LISTING_API_URL + id)
      .then((response) => {
        setListing(response.data);
        setImage(response.data.image);
        setUserId(response.data.user);
        return response.data.image;
      })
      .then((image) => axios.get(IMAGE_API_URL + image))
      .then((response) => {
        setImageName(response.data[0].name);
        console.log(response.data[0].name);
      })
      .catch((error) => console.error(error));
    // if (userId) {
    axios
      .get(USER_API_URL + userId)
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
    // }
    console.log(listing + "");

    //putting the userID variable in the dependendy array
    //allows the useEffect hook to run again when userId is
    //updated, this allowing axios to retrieve the user
    //information with the id and set it to the user object
    //without throwing errors on the first render
  }, [userId]);

  // useEffect(() => {
  // }, [userId]);

  return (
    <body id="listing-details-body">
      <HeaderComponent></HeaderComponent>
      <div>
        {/* <h1>Listing Details Page! Listing ID: {id}</h1>
        <h1>listing title: {listing.title}</h1>
        <h1>listing image name: {listing.image}</h1> */}
        {/* <h1>image file name: {imageName}s</h1> */}
        <div id="listing-bod-div">
          <div id="image-n-user">
            <div id="listing-image-div">
              {imageName && (
                <Zoom>
                  <img
                    id="image-namee"
                    alt="image of product being sold"
                    src={require("../../../pocado-server/images/" + imageName)}
                  ></img>
                </Zoom>
              )}
            </div>
            <div id="uploader-user-div">
              <div id="list-uploader-pfp">
                {/* do this whenever u need to render something but its value is always intially undefined */}
                <a href={"/user/" + user.id}>
                  {user.pfp && (
                    <img
                      src={require("../images/" + user.pfp)}
                      id="lstn-usr-upldr"
                    ></img>
                  )}
                </a>
              </div>
              <div id="un-stuff-div">
                <a id="un-link" href={"/user/" + user.id}>
                  <p id="un-p">{user.username}</p>
                </a>
                <p id="lctn-p">
                  {user.city}, {user.country}
                </p>
              </div>
              <div id="lstn-fllw-div">
                <button type="button" id="lstn-usr-fllw-btn">
                  follow
                </button>
              </div>
            </div>
          </div>
          <div>
            <div id="listing-info">
              <div id="ttl-prc-inst-div">
                <h1 id="title-heading">{listing.title}</h1>
                <h1 id="price-heading">${listing.price}</h1>
                <p id="num-in-stock">{listing.stock} in stock</p>
              </div>
              <div id="buy-buttons">
                <button type="button" className="buy-btn" id="add-to-cart-btn">
                  add to cart
                </button>
                <button type="button" className="buy-btn" id="buy-now-btn">
                  buy now
                </button>
              </div>
              <div id="details-n-stuff-div">
                <h2 id="details-heading">Details</h2>
                <p className="list-p">
                  Condition: {listing.condition ? listing.condition : "N/A"}
                </p>
                <p className="list-p">
                  Category:{" "}
                  {listing.category ? (
                    <a
                      class="listing-href"
                      href={`/category/${listing.category}`}
                    >
                      {listing.category}
                    </a>
                  ) : (
                    "N/A"
                  )}
                </p>
                <p className="list-p">
                  Date added:{" "}
                  {listing.createdAt && listing.createdAt.split("T")[0]}
                </p>
                <h2 id="desc-heading">Description</h2>
                <p className="list-p">{listing.description}</p>
                <h2 id="shipp-heading">Shipping</h2>
                <p className="list-p">
                  Shipping: {listing.shipping ? "$" + listing.shipping : "N/A"}
                </p>
                <p className="list-p">
                  Ships from:{" "}
                  {listing.ships_from ? listing.ships_from + ", US" : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </body>
  );
}

export default ListingDetails;
