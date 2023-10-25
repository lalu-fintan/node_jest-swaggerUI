import { authMiddleware, isSuperAdmin } from "../middleware/authMiddleware";
import {
  bulkUploadQuestions,
  createQuestion,
  deleteQuestion,
  getQuestionByCategory,
  getQuestions,
  updateQuestion,
} from "../controllers/questionController";
import { Router } from "express";

const router = Router();

// router.route("/").post(createQuestion).get(getQuestion);
// router.route("/:id").put().delete();

router.post("/", authMiddleware, isSuperAdmin, createQuestion);
router.post("/bulk", authMiddleware, isSuperAdmin, bulkUploadQuestions);
router.get("/", authMiddleware, getQuestions);
router.get("/:categoryid", authMiddleware, getQuestionByCategory);
router.put("/:id", authMiddleware, isSuperAdmin, updateQuestion);
router.delete("/:id", authMiddleware, isSuperAdmin, deleteQuestion);

export default router;
