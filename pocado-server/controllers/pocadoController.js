const asyncHandler = require("express-async-handler");
const Listings = require("../models/listingModel");
const User = require("../models/userModel");
const Image = require("../models/imageModel");

/**
 * @description Gets a listing by a user
 * @route GET api/listings
 * @access Private
 */
const getListings = asyncHandler(async (req, res) => {
  const listings = await Listings.find({ user: req.user.id });

  res.status(200).json(listings);
});

/**
 * @description Gets a listing by its id
 * @route GET api/listings/:id
 * @access Public
 */
const getListingById = asyncHandler(async (req, res) => {
  const listings = await Listings.findById(req.params.id);

  res.status(200).json(listings);
});

/**
 * @description Gets a listing by its id
 * @route GET api/listings/:id
 * @access Public
 */
const getListingByUserId = asyncHandler(async (req, res) => {
  const listings = await Listings.find({ user: req.params.id });

  res.status(200).json(listings);
});

/**
 * @description Adds a listing
 * @route POST api/listings
 * @access Private
 */
const postListing = asyncHandler(async (req, res) => {
  // console.log("starting postListing...");
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a title");
  }

  const listing = await Listings.create({
    user: req.user.id,
    image: req.body.image,
    title: req.body.title,
    price: req.body.price,
    stock: req.body.stock,
    num_sold: req.body.num_sold,
    rating: req.body.rating,
    category: req.body.category,
    condition: req.body.condition,
    shipping: req.body.shipping,
    ships_from: req.body.ships_from,
    group: req.body.group,
    description: req.body.description,
    favorites: req.body.favorites,
  });

  // const newImage = await Image.find({ uuid: req.body.image });
  // console.log("newImage: " + newImage);

  // const newListingId = await Listings.findById(listing.id);
  // console.log("newListingId: " + newListingId.id);

  console.log("listing made, here it is: " + listing);
  // console.log("newImage: " + newImage);

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

  // const user = await User.findById(req.user.id);

  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }

  if (listing.user.toString() == req.user.id) {
    res.status(401);
    throw new Error("User not authorized!");
  }

  const updatedListing = await Listings.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

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

  // await Listings.findByIdAndDelete(req.params.id);

  const user = await User.findById(req.user.id);

  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }

  if (listing.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized!");
  }

  await Listings.deleteOne(listing);

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getListings,
  getListingById,
  getListingByUserId,
  postListing,
  editListing,
  deleteListing,
};
