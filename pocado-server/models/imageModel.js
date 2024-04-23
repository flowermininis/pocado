const mongoose = require("mongoose");

const imageSchema = mongoose.Schema(
  {
    uuid: String,
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Image", imageSchema);
