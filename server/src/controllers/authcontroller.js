import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
export const RegisterUser = async (req, res, next) => {
  try {
    const { fullname, email, phone, password } = req.body;

    if (!fullname || !email || !phone || !password) {
      const error = new Error("All fields Reqired");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already Exist");
      error.statusCode = 409;
      return next(error);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      fullname,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({ message: "Registration Successfull" });
  } catch (error) {
    next(error);
  }
};
export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All filds required");
      error.statusCode = 400;
      return next(error);
    }

    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not registred");
      error.statusCode = 400;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, user.password);
    if (!isVerified) {
      const error = new Error("Invalid username or password");
      error.statusCode = 401;
      return next(error);
    }

    res
      .status(200)
      .json({ message: `Welcome back ${user.fullname}`, data: user });
  } catch (error) {
    next(error);
  }
};
export const LogoutUser = (req, res) => {};
export const updateUser = (req, res) => {};
