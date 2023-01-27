import { Router } from "express";
import { create, findAll } from "../controllers/news.controller.js";
const router = Router();
import { authMiddleware } from "../middlewares/auth.middleware.js";

router.post("/", authMiddleware, create);
router.get("/", findAll);

export default router;
