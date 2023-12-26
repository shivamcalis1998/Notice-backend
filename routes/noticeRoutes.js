import { Router } from "express";
import {
  getAllNotices,
  createNotice,
  updateNotice,
  deleteNotice,
} from "../controllers/noticeController.js";

import { verifyToken } from "../middleware/authMiddleware.js";
const router = Router();
router.use(verifyToken);

router.get("/", getAllNotices);
router.post("/", createNotice);
router.put("/:id", updateNotice);
router.delete("/:id", deleteNotice);

export default router;
