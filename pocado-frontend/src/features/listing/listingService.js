import axios from "axios";

const API_URL = "http://localhost:5000/api/listings/";

// Create new listing
const createListing = async (listingData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, listingData, config);
  // console.log("response data: " + response.data);
  return response.data;
};

// Get user listing
const getListings = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

const deleteListing = async (listingId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(API_URL + listingId, config);

  return response.data;
};

const listingService = {
  createListing,
  getListings,
  deleteListing
};

export default listingService;
