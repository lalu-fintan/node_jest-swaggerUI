import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    role: {
      type: String,
      enum: ["superAdmin", "subAdmin", "client"],
      default: "client",
    },
    subAdmin: {
      type: String,
      enum: ["OMA-Admin", "DLF-Admin"],
      default: "OMA-Admin",
    },

    refreshToken: String,
    password: {
      type: String,
      required: true,
    },

    addedDate: {
      type: Date,
      default: Date.now(),
    },
    lastLogin: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
