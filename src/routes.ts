import {Router} from 'express'
import userRoutes from './modules/user/user.routes'
import categoryRoutes from "./modules/categories/categories.routes"
 const router = Router();
router.use("/users",userRoutes);
router.use("/category",categoryRoutes);
export  default router
