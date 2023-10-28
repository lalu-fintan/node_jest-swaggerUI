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
exports.createSubAdmin = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const adminModel_1 = __importDefault(require("../models/adminModel"));
const mailjet_1 = require("../helper/mailjet");
const genRandomPassword_1 = require("../helper/genRandomPassword");
const subAdminTemp_1 = require("../html/subAdminTemp");
const createSubAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = req.body;
    try {
        const subAdmin = yield adminModel_1.default.findOne(client.email);
        console.log(subAdmin);
        if (subAdmin) {
            res.status(400).json("Email already exist");
        }
        else {
            client.password = (0, genRandomPassword_1.generatePassword)(10);
            yield (0, mailjet_1.mailtoCreateSubAdmin)(client.email, client.firstname, "SubAdmin Created", (0, subAdminTemp_1.subAdminAccountCreated)(client.email, client.password, client.firstname));
            const hashpassword = yield bcrypt_1.default.hash(client.password, 10);
            const account = yield adminModel_1.default.create({
                firstname: client.firstname,
                lastname: client.lastname,
                email: client.email,
                password: hashpassword,
                role: "subAdmin",
                organization: client.organization,
            });
        }
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createSubAdmin = createSubAdmin;
//# sourceMappingURL=adminController.js.map