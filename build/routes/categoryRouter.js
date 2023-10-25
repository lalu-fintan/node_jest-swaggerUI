"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware_1 = require("../middleware/authMiddleware");
const categoryController_1 = require("../controllers/categoryController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// router.route("/").post(createCategory).get(getCategory);
// router.route("/:id").put(updateCategory).delete(deleteCategory);
router.post("/", authMiddleware_1.authMiddleware, authMiddleware_1.isSuperAdmin, categoryController_1.createCategory);
router.get("/", authMiddleware_1.authMiddleware, categoryController_1.getCategory);
router.put("/:id", authMiddleware_1.authMiddleware, authMiddleware_1.isSuperAdmin, categoryController_1.updateCategory);
router.delete("/:id", authMiddleware_1.authMiddleware, authMiddleware_1.isSuperAdmin, categoryController_1.deleteCategory);
exports.default = router;
//# sourceMappingURL=categoryRouter.js.map