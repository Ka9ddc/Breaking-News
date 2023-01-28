import { Router } from "express";
import {
  create,
  findAll,
  topNews,
  findById,
  searchByTitle,
} from "../controllers/news.controller.js";
const router = Router();
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post("/", authMiddleware, create);
router.get("/", findAll);
router.get("/top", topNews);
router.get("/search", searchByTitle);

router.get("/:id", authMiddleware, findById);

export default router;
