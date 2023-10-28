"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainConfig = void 0;
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const mainConfig = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(cors());
};
exports.mainConfig = mainConfig;
//# sourceMappingURL=mainConfig.js.map