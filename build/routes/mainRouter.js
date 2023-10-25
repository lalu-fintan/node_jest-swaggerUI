"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRoutes = void 0;
const errorHander_1 = require("../middleware/errorHander");
const userRouter_1 = __importDefault(require("./userRouter"));
const questionRouter_1 = __importDefault(require("./questionRouter"));
const categoryRouter_1 = __importDefault(require("./categoryRouter"));
const mainRoutes = (app) => {
    app.use("/api/user", userRouter_1.default);
    app.use("/api/question", questionRouter_1.default);
    app.use("/api/category", categoryRouter_1.default);
    //   error handler
    app.use(errorHander_1.notFound);
    app.use(errorHander_1.errorHandler);
};
exports.mainRoutes = mainRoutes;
//# sourceMappingURL=mainRouter.js.map