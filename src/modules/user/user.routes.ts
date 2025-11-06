import { Router } from "express";
import { UserController } from "./user.controller";

const router = Router();
const userController = new UserController();
router.post("/user/register",userController.register);
router.post('/user/login',userController.login);
 export default router;
