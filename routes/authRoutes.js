import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();
router.post("/register", register);
router.post("/login", login);

router.use(verifyToken);

export default router;
