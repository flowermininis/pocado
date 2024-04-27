const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

// add value to denote if the item is sold or not
const listingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      type: String,
      ref: "Image",
    },
    title: {
      type: String,
      required: [true, "Please give your listing a title!"],
    },
    price: String,
    stock: Number,
    num_sold: Number,
    rating: String,
    category: String,
    condition: String,
    shipping: String,
    ships_from: String,
    group: String,
    description: String,
    favorites: Number,
  },
  {
    timestamps: true,
  }
);

listingSchema.index({ title: "text" });

module.exports = mongoose.model("Listings", listingSchema);
