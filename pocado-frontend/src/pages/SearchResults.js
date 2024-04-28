import "./SearchResults.css";
import HeaderComponent from "../components/HeaderComponent";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import listings_hollow_heart from "../images/listings_hollow_heart.jpg";

import axios from "axios";

function SearchResults() {
  const [search, setSearch] = useState("null");
  const [searchParams] = useSearchParams();
  const [listings, setListings] = useState([]);

  const LISTINGS_API_URL = "http://localhost:5000/api/search/";

  //search bar took me a long time because response.data
  //kept returning empty because i misspelled
  //what i was looking for LOL

  useEffect(() => {
    // const urlSearchString = window.location.search;
    // const params = new URLSearchParams(urlSearchString);
    setSearch(searchParams.get("q"));
    console.log("before axios...");
    console.log(search);
    axios
      .get(LISTINGS_API_URL, {
        params: {
          q: search,
        },
      })
      .then((response) => {
        setListings(response.data);
      });

    console.log(search);
  }, [searchParams, search]);

  console.log(search);
  console.log(searchParams);
  console.log(listings);
  return (
    <body className="search-rslt-body">
      <HeaderComponent></HeaderComponent>
      <div id="search-results-div">
        {listings.length > 0 ? (
          <>
            <h1 className="num-rslt-h">
              {listings.length} results found for "{search}"
            </h1>
            <div className="srch-listings-map-item">
              {listings.map((listing) => (
                <div className="srch-listing-item" key={listing._id}>
                  <a id="srch-listi-a" href={"/listings/" + listing._id}>
                    <img
                      id="srch-listing-img"
                      src={listings_hollow_heart}
                    ></img>
                  </a>
                  <div id="srch-list-crd-inf">
                    <a id="inf-a" href={"/listings/" + listing._id}>
                      <p>{listing.title}</p>
                      <p>${listing.price}</p>
                    </a>
                  </div>
                  {/* <button type="button">delete</button> */}
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1 className="num-rslt-h">No results found for "{search}"</h1>
        )}
      </div>
      {/* <div>hello</div> */}
    </body>
  );
}

export default SearchResults;
