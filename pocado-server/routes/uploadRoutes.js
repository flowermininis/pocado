const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Image = require("../models/imageModel");

const storage = multer.diskStorage({
  destination: "./images",
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage }).single("testImage");

router.get("/", (req, res) => {
  res.json({ message: "upload" });
});

router.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new Image({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: "image/jpg",
        },
      });
      newImage.save();
      // .then(() => res.send("successfully uploaded"))
      // .catch((err) => console.log(err));
    }
  });
  res.json({ message: "image uploaded" });
});

module.exports = router;
