"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
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
}, { timestamps: true });
exports.default = mongoose.model("Category", categorySchema);
//# sourceMappingURL=categoryModel.js.map