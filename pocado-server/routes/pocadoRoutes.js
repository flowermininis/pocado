const express = require("express");
const router = express.Router();
const {
  getListings,
  postListing,
  editListing,
  deleteListing,
} = require("../controllers/pocadoController");

// uses the '/' route for get and post requests
router.route("/").get(getListings).post(postListing);

// uses the '/:id' route for delete and put requests,
// where id is the object id for the database entry
router.route("/:id").delete(deleteListing).put(editListing);

// router.get("/", getListings);

// router.post("/", postListing);

// router.put("/:id", editListing);

// router.delete("/:id", deleteListing);

module.exports = router;
