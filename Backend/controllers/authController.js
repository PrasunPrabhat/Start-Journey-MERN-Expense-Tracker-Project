const JWT = require("jsonwebtoken");
const User = require("../models/User")

// Generate JWT Token
const generateToken = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Register User
const registerUser = async (req, res) => {
    const {fullName , email , password , profileImageUrl} = req.body ;
    // Validation : check for  missing values
};

// Login User
const loginUser = async (req, res) => {};

// Get User Information
const getUserInfo = async (req, res) => {};

module.exports = { registerUser, loginUser, getUserInfo };
