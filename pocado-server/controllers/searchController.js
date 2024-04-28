const asyncHandler = require("express-async-handler");
const Listings = require("../models/listingModel");

/**
 * @description Gets listings by the entered query
 * @route GET api/listings/search?q=
 * @access Public
 */
const getListingsByQuery = asyncHandler(async (req, res) => {
  const listings = await Listings.find({ $text: { $search: req.query.q } });

  res.status(200).json(listings);
});

module.exports = {
  getListingsByQuery,
};
