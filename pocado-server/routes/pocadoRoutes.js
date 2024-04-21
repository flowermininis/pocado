const express = require("express");
const router = express.Router();
const {
  getListings,
  getProfileById,
  postListing,
  editListing,
  deleteListing,
} = require("../controllers/pocadoController");
const { protect } = require("../middleware/authMiddleware");

// uses the '/' route for get and post requests
router.route("/").get(protect, getListings).post(protect, postListing);

// uses the '/:id' route for delete and put requests,
// where id is the object id for the database entry
router.route("/:id").delete(protect, deleteListing).put(protect, editListing);

router.get("/profile/:id", getProfileById);

// router.get("/", getListings);

// router.post("/", postListing);

// router.put("/:id", editListing);

// router.delete("/:id", deleteListing);

module.exports = router;
