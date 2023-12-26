import { Router } from "express";
import {
  getAllNoticesFunction,
  createNoticeFunction,
  updateNoticeFunction,
  deleteNoticeFunction,
  getNoticeByIdFunction,
} from "../controllers/noticeController.js";

import { verifyToken } from "../middleware/authMiddleware.js";
const router = Router();
router.use(verifyToken);

router.get("/", getAllNoticesFunction);
router.post("/", createNoticeFunction);
router.get("/:id", getNoticeByIdFunction);
router.put("/:id", updateNoticeFunction);
router.delete("/:id", deleteNoticeFunction);

export default router;
