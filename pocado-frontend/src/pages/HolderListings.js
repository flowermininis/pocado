import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import "./ListingPages.css";
import listings_hollow_heart from "../images/listings_hollow_heart.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

function HolderListings() {
  const [pchListings, setPchListings] = useState([]);
  const LISTING_API_URL = "http://localhost:5000/api/categories/pocaholders/";

  useEffect(() => {
    axios
      .get(LISTING_API_URL)
      .then((response) => setPchListings(response.data));
  }, []);

  return (
    <body>
      <HeaderComponent></HeaderComponent>
      <div className="cat-listings-div">
        <h1>Photocard Holders</h1>
        <div className="pup-listings-map-item">
          {pchListings.map((listing) => (
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

export default HolderListings;
