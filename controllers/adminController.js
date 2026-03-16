import User from "../models/user.js";

export const getusers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json({
         status: "success", 
        data: users });
  } catch (err) {
    next(err);
  }
};