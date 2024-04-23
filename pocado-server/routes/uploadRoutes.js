const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Image = require("../models/imageModel");
const { upload } = require("../middleware/uploadMiddleware");
const { getImage, postImage } = require("../controllers/imageContoller");

router.get("/:id", getImage);

router.post("/", upload.single("image"), postImage);

module.exports = router;
