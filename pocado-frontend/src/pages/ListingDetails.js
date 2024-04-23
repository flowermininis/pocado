import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";

function ListingDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState([]);
  const [image, setImage] = useState([]);
  const LISTING_API_URL = "http://localhost:5000/api/listings/";
  const IMAGE_API_URL = "http://localhost:5000/api/upload/";

  useEffect(() => {
    axios
      .get(LISTING_API_URL + id)
      .then(
        (response) => (
          setListing(response.data),
          axios
            .get(IMAGE_API_URL + response.data.image)
            .then(
              (response) => setImage(response.data)
              // setImage(listing.image),
            )
            .catch((error) => console.error(error))

          // setImage(listing.image),
        )
      )
      .catch((error) => console.error(error));

    console.log(listing);
  }, []);

  return (
    <body>
      <HeaderComponent></HeaderComponent>
      <div>
        <h1>Listing Details Page! Listing ID: {id}</h1>
        <h1>listing title: {listing.title}</h1>
        <h1>listing image name: {listing.image}</h1>
        <h1>image file name: {image.name}</h1>
      </div>
    </body>
  );
}

export default ListingDetails;
