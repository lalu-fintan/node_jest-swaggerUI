"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const adminModel_1 = __importDefault(require("../models/adminModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const refreshToken_1 = require("../helper/refreshToken");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const emailRegex = new RegExp(email, "i");
        const user = yield adminModel_1.default.findOne({ email: { $regex: emailRegex } });
        if (user && (yield bcrypt_1.default.compare(password, user.password))) {
            const accessToken = (0, refreshToken_1.generateAccessToken)(user);
            res.status(200).json({
                message: "login successfull",
                token: accessToken,
            });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.login = login;
//# sourceMappingURL=authController.js.map