const asyncHandler = require("express-async-handler");
const Listings = require("../models/listingModel");

/**
 * @description Gets a listing by its id
 * @route GET api/listings/:id
 * @access Public
 */
const getPhotocardListings = asyncHandler(async (req, res) => {
  const listings = await Listings.find({ category: "Photocards" });

  res.status(200).json(listings);
});

/**
 * @description Gets a listing by its id
 * @route GET api/listings/:id
 * @access Public
 */
const getPhotocardHolderListings = asyncHandler(async (req, res) => {
  const listings = await Listings.find({ category: "Photocard holders" });

  res.status(200).json(listings);
});

/**
 * @description Gets a listing by its id
 * @route GET api/listings/:id
 * @access Public
 */
const getPhotocardSleeveListings = asyncHandler(async (req, res) => {
  const listings = await Listings.find({ category: "Photocard sleeves" });

  res.status(200).json(listings);
});

/**
 * @description Gets a listing by its id
 * @route GET api/listings/:id
 * @access Public
 */
const getBinderColBukListings = asyncHandler(async (req, res) => {
  const listings = await Listings.find({ category: "Binders/collect books" });

  res.status(200).json(listings);
});

/**
 * @description Gets a listing by its id
 * @route GET api/listings/:id
 * @access Public
 */
const getToploaderListings = asyncHandler(async (req, res) => {
  const listings = await Listings.find({ category: "Toploaders" });

  res.status(200).json(listings);
});

module.exports = {
  getPhotocardListings,
  getPhotocardHolderListings,
  getPhotocardSleeveListings,
  getBinderColBukListings,
  getToploaderListings,
};
