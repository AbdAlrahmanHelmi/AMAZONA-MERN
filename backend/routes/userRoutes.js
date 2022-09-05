import express from "express";
import expressAsyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";
const userRoutes = express.Router();

userRoutes.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "Invalid Email or password" });
  })
);
userRoutes.post(
  "/signup",
  expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password),
    });
    
    res.send({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmain: newUser.isAdmin,
      token: generateToken(newUser),
    });
  })
);
export default userRoutes;
