"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware_1 = require("../middleware/authMiddleware");
const questionController_1 = require("../controllers/questionController");
const express_1 = require("express");
const router = (0, express_1.Router)();
// router.route("/").post(createQuestion).get(getQuestion);
// router.route("/:id").put().delete();
router.post("/", authMiddleware_1.authMiddleware, authMiddleware_1.isSuperAdmin, questionController_1.createQuestion);
router.post("/bulk", authMiddleware_1.authMiddleware, authMiddleware_1.isSuperAdmin, questionController_1.bulkUploadQuestions);
router.get("/", authMiddleware_1.authMiddleware, questionController_1.getQuestions);
router.get("/:categoryid", authMiddleware_1.authMiddleware, questionController_1.getQuestionByCategory);
router.put("/:id", authMiddleware_1.authMiddleware, authMiddleware_1.isSuperAdmin, questionController_1.updateQuestion);
router.delete("/:id", authMiddleware_1.authMiddleware, authMiddleware_1.isSuperAdmin, questionController_1.deleteQuestion);
exports.default = router;
//# sourceMappingURL=questionRouter.js.map