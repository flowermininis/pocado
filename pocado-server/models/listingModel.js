const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

const listingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please give your listing a title!"],
    },
    price: Decimal128,
    stock: Number,
    num_sold: Number,
    rating: Decimal128,
    category: String,
    description: String,
    favorites: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Listings", listingSchema);
