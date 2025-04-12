const express = require("express");

const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser); // Send data to the Server
router.post("/login", loginUser); // Send data to the Server
// router.get("/getUser", protect, getUserInfo); // Retrieve  data to the Server

module.exports = router;
