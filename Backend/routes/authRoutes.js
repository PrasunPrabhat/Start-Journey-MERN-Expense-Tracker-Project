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
  if (!req.file) {
    return res.status(400).json({ message: "No file Uploaded" });
  }
  const imageURL = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;

  res.status(200).json({ imageURL });
});

module.exports = router;
