const express = require("express");
const { protect } = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");

const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/register", registerUser); // Send data to the Server

router.post("/login", loginUser); // Send data to the Server

router.get("/getUser", protect, getUserInfo); // Retrieve  data from the Server

router.post("/upload-image", upload.single("image"), (req, res) => {
  if (!req.file || !req.file.path) {
    return res.status(400).json({ message: "Image upload failed" });
  }

  res.status(200).json({ imageURL: req.file.path }); // Cloudinary URL
});

module.exports = router;
