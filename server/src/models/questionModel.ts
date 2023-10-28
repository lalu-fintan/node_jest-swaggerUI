import mongoose, { Schema } from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      unique: true,
    },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    answers: [
      {
        option: {
          type: String,
          required: true,
        },
        mark: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Questions", questionSchema);
