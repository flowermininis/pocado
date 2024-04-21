const asyncHandler = require("express-async-handler");
const Listings = require("../models/listingModel");
const User = require("../models/userModel");
const Profile = require("../models/profileModel");

/**
 * @description Gets a user
 * @route GET api/users/user
 * @access Public
 */
const getProfileById = asyncHandler(async (req, res) => {
  const sngl_prof = await Profile.findById(req.params.user.id);

  res.status(200).json(sngl_prof);
});

/**
 * @description Gets a user
 * @route GET api/users/user
 * @access Public
 */
const createProfile = asyncHandler(async (req, res) => {
  // const sngl_prof = await Profile.findById(req.params.user.id);

  const profile = await Profile.create({
    user: req.user.id,
    username: req.user.username,
    pfp: req.body.pfp,
    birthday: req.body.birthday,
    bio: req.body.bio,
    city: req.body.city,
    country: req.body.country,
    following: req.body.following,
    followers: req.body.followers,
  });

  res.status(200).json(profile);
});

/**
 * @description Gets a listing
 * @route GET api/listings
 * @access Public
 */
const getListings = asyncHandler(async (req, res) => {
  const listings = await Profiles.find({ user: req.user.id });

  res.status(200).json(listings);
});

// const getListings = asyncHandler(async (req, res) => {
//   const listings = await Listings.find();

//   res.status(200).json(listings);
// });

// /**
//  * @description Gets a listing by a
//  * @route GET api/listings
//  * @access Public
//  */
// const getUserListings = asyncHandler(async (req, res) => {
//   const listings = await Listings.find().populate("user", "username");

//   if (!listings) {
//     res
//       .status(400)
//       .json({ message: `${req.params.user.username} has no listings :(` });
//   }

//   res.status(200).json(listings);
// });

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
    user: req.user.id,
    title: req.body.title,
    price: req.body.price,
    stock: req.body.stock,
    num_sold: req.body.num_sold,
    rating: req.body.rating,
    category: req.body.category,
    group: req.body.group,
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

  // const user = await User.findById(req.user.id);

  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }

  if (global.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized!");
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

  // await Listings.findByIdAndDelete(req.params.id);

  const user = await User.findById(req.user.id);

  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }

  if (global.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized!");
  }

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getProfileById,
  postProfile,
  getListings,
  // getUserListings,
  postListing,
  editListing,
  deleteListing,
};
