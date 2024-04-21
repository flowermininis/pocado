const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const profileSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: String,
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
exports.profileSchema = mongoose.model("Profile", profileSchema);
