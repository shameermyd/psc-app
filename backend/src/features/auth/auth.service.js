const User = require("./auth.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginUser = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isUserValid = await bcrypt.compare(password, user.password);
  if (!isUserValid) {
    throw new Error("Invalid email or password");
  }
  const token = jwt.sign({userId: user._id},process.env.JWT_SECRET,{expiresIn: "1d"})

  return { user, token };
};

const registerUser = async (data) => {
  const { name, email, password } = data;

  // check user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // save user
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  return await user.save();
};

module.exports = { loginUser, registerUser }