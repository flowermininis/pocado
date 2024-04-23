const asyncHandler = require("express-async-handler");
const Image = require("../models/imageModel");

const getImage = asyncHandler(async (req, res) => {
  const image = await Image.find({ uuid: req.params.id });

  res.status(200).json(image);
});

const postImage = asyncHandler(async (req, res) => {
  // console.log("before try-catch");
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file found!" });
    }

    const newImage = Image({
      uuid: req.body.uuid,
      name: req.file.filename,
      path: req.file.path,
    });

    const savedImage = await newImage.save();
    // console.log("before 200 status...");
    res.status(200).json(savedImage);
    // console.log("after 200 status...");
  } catch (error) {
    res.json(error);
  }
});

module.exports = {
  getImage,
  postImage,
};
