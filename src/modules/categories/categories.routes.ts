import { Router } from "express";
import { CategoryController } from "./categories.controller";
const categoryController = new CategoryController();
const router = Router();
router.post("/create",categoryController.create);


export default router;
