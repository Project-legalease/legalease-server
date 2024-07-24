import mongoose from "mongoose";
import { IAuthLawyer, IAuthUser } from "../interfaces/auth.interface";

const userSchema = new mongoose.Schema<IAuthUser & IAuthLawyer>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, required: false },
    role: { type: String, default: "user", required: true },
    qualification: { type: String },
    specialization: { type: String },
    experience: { type: String },
    location: { type: String },
    // accessToken: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
);

const AuthUserModel = mongoose.model("User", userSchema);

export { AuthUserModel };
