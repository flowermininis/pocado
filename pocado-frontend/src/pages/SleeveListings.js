import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import "./ListingPages.css";
import listings_hollow_heart from "../images/listings_hollow_heart.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

function SleeveListings() {
  const [pcsListings, setPcsListings] = useState([]);
  const LISTING_API_URL = "http://localhost:5000/api/categories/pocasleeves/";

  useEffect(() => {
    axios
      .get(LISTING_API_URL)
      .then((response) => setPcsListings(response.data));
  }, []);

  return (
    <body>
      <HeaderComponent></HeaderComponent>
      <div className="cat-listings-div">
        <h1>Photocard Sleeves</h1>
        <div className="pup-listings-map-item">
          {pcsListings.map((listing) => (
            <a id="pup-listi-a" href={"/listings/" + listing._id}>
              <div className="pup-listing-item" key={listing._id}>
                <img id="pup-listing-img" src={listings_hollow_heart}></img>
                <div id="pup-list-crd-inf">
                  <p>{listing.title}</p>
                  <p>${listing.price}</p>
                </div>
                {/* <p>{listing.image}</p> */}
              </div>
            </a>
          ))}
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </body>
  );
}

export default SleeveListings;
