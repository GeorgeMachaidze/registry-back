import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error, "this.error");
    return res.status(500).json({
      message: "error while fetching users",
    });
  }
};

export const createUser = async (req, res) => {
  const { name, surname } = req.body;

  try {
    if (!name || !surname) {
      return res.status(400).json({
        message: "Name and surname are required",
      });
    }
    const user = new User({ name, surname });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error, "this.error");
    return res.status(500).json({
      message: "error while create users",
    });
  }
};
