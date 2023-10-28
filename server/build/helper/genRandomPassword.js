"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = void 0;
const crypto_1 = __importDefault(require("crypto"));
const generatePassword = (length) => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const random = crypto_1.default.randomInt(0, charset.length);
        password += charset[random];
    }
    return password;
};
exports.generatePassword = generatePassword;
//# sourceMappingURL=genRandomPassword.js.map