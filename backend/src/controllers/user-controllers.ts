import { NextFunction } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(201).json({ message: "OK", users });
  } catch (error) {
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const userSignup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(401).send("This email is already in use");

    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return res.status(200).json({ message: "OK", id: user._id.toString() });
  } catch (error) {
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("User not registered");
    }
    // compare passwords
    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(403).send("Incorrect password");
    }
    // User successfully authenticated

    return res.status(200).json({ message: "OK", id: user._id.toString() });
  } catch (error) {
    next(error);
  }
};
