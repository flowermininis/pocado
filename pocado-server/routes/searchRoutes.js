const express = require("express");
const router = express.Router();
const { getListingsByQuery } = require("../controllers/searchController");

router.get("/", getListingsByQuery);

module.exports = router;
