import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the name"],
    },
    email: {
      type: String,
      required: [true, "please enter the email"],
      unique: [true, "this email  already  taken"],
    },
    password: {
      type: String,
      required: [true, "please enter the password"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
