"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose")); // Erase if already required
// Declare the Schema of the Mongo model
const userSchema = new mongoose_1.default.Schema({
    firstname: {
        type: String,
        default: "",
    },
    lastname: {
        type: String,
        default: "",
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "Participates",
    },
    refreshToken: String,
}, { timestamps: true });
//Export the model
exports.default = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=userModel.js.map