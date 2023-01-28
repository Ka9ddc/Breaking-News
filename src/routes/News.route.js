import { Router } from "express";
import {
  create,
  findAll,
  topNews,
  findById,
} from "../controllers/news.controller.js";
const router = Router();
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews);
router.get("/:id", findById);

export default router;
