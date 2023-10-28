import mongoose, { Schema } from "mongoose";

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
      match: [
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        `Please fill valid email address`,
      ],
    },
    role: {
      type: String,
      enum: ["superAdmin", "subAdmin", "client"],
      default: "client",
    },
    organization: {
      type: Schema.Types.ObjectId,
      ref: "Organization",
    },

    refreshToken: String,
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", adminSchema);
