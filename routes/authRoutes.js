import { Router } from "express";
import {
  registerFunction,
  loginFunction,
} from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();
router.post("/register", registerFunction);
router.post("/login", loginFunction);

export default router;
