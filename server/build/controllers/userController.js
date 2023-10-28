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
exports.updateUserById = exports.getUser = exports.logout = exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = __importDefault(require("../models/userModel"));
const refreshToken_1 = require("../helper/refreshToken");
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    try {
        const hashPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield userModel_1.default.create({
            username,
            email,
            password: hashPassword,
        });
        const refreshToken = (0, refreshToken_1.generateRefreshToken)(user.id);
        const updateUser = yield userModel_1.default.findByIdAndUpdate(user.id, {
            refreshToken: refreshToken,
        }, { new: true });
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 72 * 60 * 60 * 1000,
        });
        const accessToken = (0, refreshToken_1.generateAccessToken)(user);
        res.status(200).json({ updateUser, accessToken });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const emailRegex = new RegExp(email, "i");
        const user = yield userModel_1.default.findOne({ email: { $regex: emailRegex } });
        if (user && (yield bcrypt_1.default.compare(password, user.password))) {
            const refreshToken = (0, refreshToken_1.generateRefreshToken)(user.id);
            const updateUser = yield userModel_1.default.findByIdAndUpdate(user.id, {
                refreshToken: refreshToken,
            }, { new: true });
            res.cookie("refreshToken", refreshToken, {
                httpOnly: true,
                maxAge: 72 * 60 * 60 * 1000,
            });
            const accessToken = (0, refreshToken_1.generateAccessToken)(user);
            res.status(200).json({
                message: "login successfull",
                data: user,
                token: accessToken,
            });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cookie = req.cookies;
    if (!cookie.refreshToken) {
        res.status(400).json("you don't have a token");
    }
    const refreshToken = cookie.refreshToken;
    const user = yield userModel_1.default.findOne({ refreshToken });
    if (!user) {
        res.clearCookie("refreshToken", { httpOnly: true, secure: true });
        res.status(403);
    }
    yield userModel_1.default.findOneAndUpdate({ refreshToken }, {
        refreshToken: "",
    }, { new: true });
    res.clearCookie("refreshToken", { httpOnly: true, secure: true });
    res.status(200).json({ message: "logout successfully" });
});
exports.logout = logout;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.user.user;
    try {
        const user = yield userModel_1.default.findById(_id).select("_id username firstname lastname email");
        if (!user) {
            res.status(400).json("user not found");
        }
        else {
            res.status(200).json(user);
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getUser = getUser;
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.user.user;
    try {
        const user = yield userModel_1.default.findById(_id);
        if (!user) {
            res.status(400).json("user not found");
        }
        else {
            const updateUser = yield userModel_1.default.findByIdAndUpdate(_id, req.body, {
                new: true,
            });
            res.status(200).json("updated successfully");
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateUserById = updateUserById;
//# sourceMappingURL=userController.js.map