const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      //   enum: [
      //     "Strategist",
      //     "Sovereign",
      //     "Explorer",
      //     "Warrior",
      //     "Transformar",
      //     "Renegade",
      //     "Storyteller",
      //     "Dreamer",
      //     "Lover",
      //     "Nuturer",
      //   ],
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);
