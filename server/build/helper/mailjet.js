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
exports.mailtoCreateSubAdmin = void 0;
const node_mailjet_1 = __importDefault(require("node-mailjet"));
const mailjet = new node_mailjet_1.default({
    apiKey: process.env.API_KEY,
    apiSecret: process.env.SECRET_KEY,
});
const mailtoCreateSubAdmin = (email, name, subject, content) => __awaiter(void 0, void 0, void 0, function* () {
    yield mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: {
                    Email: "lalu.fintan@gmail.com",
                    Name: "Laluprasath",
                },
                To: {
                    Email: email,
                    Name: name,
                },
                subject: subject,
                HTMLPart: content,
            },
        ],
    });
});
exports.mailtoCreateSubAdmin = mailtoCreateSubAdmin;
//# sourceMappingURL=mailjet.js.map