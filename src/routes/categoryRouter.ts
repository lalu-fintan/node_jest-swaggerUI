import { authMiddleware, isSuperAdmin } from "../middleware/authMiddleware";
import {
  createCategory,
  deleteCategory,
  getCategory,
  updateCategory,
} from "../controllers/categoryController";
import { Router } from "express";

const router = Router();

// router.route("/").post(createCategory).get(getCategory);
// router.route("/:id").put(updateCategory).delete(deleteCategory);

router.post("/", authMiddleware, isSuperAdmin, createCategory);
router.get("/", authMiddleware, getCategory);
router.put("/:id", authMiddleware, isSuperAdmin, updateCategory);
router.delete("/:id", authMiddleware, isSuperAdmin, deleteCategory);

export default router;
