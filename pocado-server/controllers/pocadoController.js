const asyncHandler = require("express-async-handler");

const Listings = require("../models/listingModel");

/**
 * @description Gets a listing
 * @route GET api/listings
 * @access Private
 */
const getListings = asyncHandler(async (req, res) => {
  const listings = await Listings.find();

  res.status(200).json(listings);
});

/**
 * @description Adds a listing
 * @route POST api/listings
 * @access Private
 */
const postListing = asyncHandler(async (req, res) => {
  // console.log(req.body);
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a test");
  }

  const listing = await Listings.create({
    title: req.body.title,
    price: req.body.price,
    stock: req.body.stock,
    num_sold: req.body.num_sold,
    rating: req.body.rating,
    category: req.body.category,
    description: req.body.description,
    favorites: req.body.favorites,
  });

  res.status(200).json(listing);
});

/**
 * @description Edits a listing
 * @route UPDATE api/listings/:id
 * @access Private
 */
const editListing = asyncHandler(async (req, res) => {
  const listing = await Listings.findById(req.params.id);

  if (!listing) {
    res.status(400);
    throw new Error("Lisiting not found :(");
  }

  const updatedListing = await findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedListing);
});

/**
 * @description Deletes a listing
 * @route DELETE api/listings/:id
 * @access Private
 */
const deleteListing = asyncHandler(async (req, res) => {
  const listing = await Listings.findById(req.params.id);

  if (!listing) {
    res.status(400);
    throw new Error("Listing not found :(");
  }

  await Listings.findByIdAndDelete(req.params.id);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getListings,
  postListing,
  editListing,
  deleteListing,
};
