"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware_1 = require("../middleware/authMiddleware");
const userController_1 = require("../controllers/userController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/register", userController_1.register);
router.post("/login", userController_1.login);
router.get("/logout", userController_1.logout);
router.get("/getUser", authMiddleware_1.authMiddleware, userController_1.getUser);
router.put("/updateUser", authMiddleware_1.authMiddleware, userController_1.updateUserById);
exports.default = router;
//# sourceMappingURL=userRouter.js.map