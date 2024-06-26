const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add your username!"],
      unique: true,
    },

    email: {
      type: String,
      required: [true, "Please add your email!"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Please add a password!"],
    },

    pfp: String,
    birthday: String,
    bio: String,
    city: String,
    country: String,
    following: Number,
    followers: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
