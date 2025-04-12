const User = require("../models/User");
const JWT = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register User API Request Handle
exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body;
  // Validation : check for  missing fields
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check Email already exits
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in Use" });
    }

    // Create the User
    const user = await User.create({
      fullName,
      email,
      password,
      profileImageUrl,
    });

    res.status(201).json({
      id: user._id,
      user,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: "Error Registering", error: err.message });
  }
};

// Login User API Request Handle
exports.loginUser = async (req, res) => {};

// Get User Information API Request Handle
exports.getUserInfo = async (req, res) => {};


