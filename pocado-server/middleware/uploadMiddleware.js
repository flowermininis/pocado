const multer = require("multer");
const path = require("path");
const Image = require("../models/imageModel");

const storage = multer.diskStorage({
  destination: "./images",
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

module.exports = { upload };
