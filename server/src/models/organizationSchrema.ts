import mongoose, { Schema } from "mongoose";

const organization = new Schema({
  organizationName: {
    type: String,
    required: true,
  },
  primaryContactName: {
    type: String,
    required: true,
  },
  primaryEmail: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      `Please fill valid email address`,
    ],
  },
  primaryColor: {
    type: String,
    required: true,
  },

  Logo: {
    type: String,
    default: "",
  },
  subAdmins: [
    {
      type: Schema.Types.ObjectId,
      ref: "Admin",
    },
  ],
  active: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Organization", organization);
