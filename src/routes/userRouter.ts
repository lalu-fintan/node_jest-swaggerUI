import { authMiddleware } from "../middleware/authMiddleware";
import {
  getUser,
  login,
  logout,
  register,
  updateUserById,
} from "../controllers/userController";
import { Router } from "express";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/getUser", authMiddleware, getUser);
router.put("/updateUser", authMiddleware, updateUserById);

export default router;
