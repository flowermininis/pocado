const express = require("express");
const router = express.Router();
const {
  getListings,
  getListingById,
  getListingByUserId,
  postListing,
  editListing,
  deleteListing,
} = require("../controllers/pocadoController");
const { protect } = require("../middleware/authMiddleware");

// uses the '/' route for get and post requests
router.route("/").get(protect, getListings).post(protect, postListing);

// uses the '/:id' route for delete and put requests,
// where id is the object id for the database entry
router
  .route("/:id")
  .get(getListingById)
  .delete(protect, deleteListing)
  .put(protect, editListing);

// uses the '/user-listings/:id' route to get
// listings based on a user's id
router.route("/user-listings/:id", getListingByUserId);

module.exports = router;
