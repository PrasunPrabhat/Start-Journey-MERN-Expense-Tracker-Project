const User = require("../models/User");
const JWT = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (id) => {
  return JWT.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
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
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are Required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.status(200).json({
      id: user._id,
      user,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(500).json({ message: "Error Registering", error: err.message });
  }
};

// Get User Information API Request Handle
exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if( !user ) {
      return res.status(404).json({message:"User Not Found"});
    }

    res.status(200).json(user);  
  } catch (error) {
    res.status(500).json({ message: "Error Registering", error: err.message });
  }
};
