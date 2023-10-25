"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const adminSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
exports.default = mongoose_1.default.model("Admin", adminSchema);
//# sourceMappingURL=adminModel.js.map