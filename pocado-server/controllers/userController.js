const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Profile = require("../models/profileModel");

/**
 * @description Gets a user
 * @route GET api/users/user/:id
 * @access Public
 */
const getUserById = asyncHandler(async (req, res) => {
  const sngl_user = await User.findById(req.params.id);

  res.status(200).json({
    id: sngl_user.id,
    username: sngl_user.username,
    email: sngl_user.email,
    pfp: sngl_user.pfp,
    birthday: sngl_user.birthday,
    bio: sngl_user.bio,
    city: sngl_user.city,
    country: sngl_user.country,
    following: sngl_user.following,
    followers: sngl_user.followers,
  });
});

/**
 * @description Updates a user object
 * @route PATCH api/users/user/:id
 * @access Public
 */
const editUserProfile = asyncHandler(async (req, res) => {
  const sngl_user = await User.findById(req.params.id);

  if (!sngl_user) {
    res.status(400);
    throw new Error("User not found :(");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

/**
 * @description Registers a new user
 * @route POST api/users
 * @access Public
 */
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields!");
  }

  // check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  // Hash password
  const salt = await bcrypt.genSalt();
  const hashedPw = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    username,
    email,
    password: hashedPw,
    pfp: "",
    birthday: "",
    bio: "",
    city: "",
    country: "United States",
    following: 0,
    followers: 0,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      pfp: user.pfp,
      birthday: user.birthday,
      bio: user.bio,
      city: user.city,
      country: user.country,
      following: user.following,
      followers: user.followers,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  // res.json({ message: "Register user" });
});

/**
 * @description Authenticate a user
 * @route POST api/users/login
 * @access Public
 */
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      pfp: user.pfp,
      birthday: user.birthday,
      bio: user.bio,
      city: user.city,
      country: user.country,
      following: user.following,
      followers: user.followers,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials!");
  }
});

/**
 * @description Get user data
 * @route GET api/users/user
 * @access Private
 */
const getUserCreds = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
  // res.json({ message: "User credentials display" });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  getUserById,
  registerUser,
  loginUser,
  getUserCreds,
  editUserProfile,
};
