const express = require("express");
const router = express.Router();
const {
  getPhotocardListings,
  getPhotocardHolderListings,
  getPhotocardSleeveListings,
  getBinderColBukListings,
  getToploaderListings,
} = require("../controllers/categoryController");

router.get("/photocards/", getPhotocardListings);
router.get("/pocaholders/", getPhotocardHolderListings);
router.get("/pocasleeves/", getPhotocardSleeveListings);
router.get("/bindercolbuk/", getBinderColBukListings);
router.get("/toploaders/", getToploaderListings);

module.exports = router;
