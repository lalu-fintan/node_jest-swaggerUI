"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = exports.generateRefreshToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateRefreshToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.SECRET_TOKEN || "", {
        expiresIn: "3d",
    });
};
exports.generateRefreshToken = generateRefreshToken;
const generateAccessToken = (user) => {
    return jsonwebtoken_1.default.sign({ user }, process.env.SECRET_TOKEN || "", {
        expiresIn: "1d",
    });
};
exports.generateAccessToken = generateAccessToken;
//# sourceMappingURL=refreshToken.js.map