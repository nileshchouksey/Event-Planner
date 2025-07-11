import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
      default: "",
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "other"],
      default: "N/A",
    },
    representing: {
      type: String,
      enum: ["Bride", "Groom", "other", ""],
      required: true,
      default: "N/A",
    },
    occupassion: {
      type: String,
      required: true,
      default: "N/A",
    },
    address: {
      type: String,
      required: true,
      default: "N/A",
    },
    city: {
      type: String,
      required: true,
      default: "N/A",
    },

    District: {
      type: String,
      required: true,
      default: "N/A",
    },
    state: {
      type: String,
      required: true,
      default: "N/A",
    },

  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
