const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUserCreds,
  getUserById,
  editUserProfile,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/user", protect, getUserCreds);
router.get("/user/:id", getUserById);
router.patch("/user/:id", editUserProfile);

module.exports = router;
