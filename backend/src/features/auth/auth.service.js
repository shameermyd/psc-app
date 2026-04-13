const User = require("./auth.model");
const bcrypt = require("bcryptjs");

const loginService = (email, password) => {
    if (email === "admin@test.com" && password === "1234") {
        return {
            success: true,
            token: "fake-jwt-token",
            user: { email }
        }
    }

    return {
        success: false,
        message: "Invalid credentials"
    };
}

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

module.exports = { loginService, registerUser }