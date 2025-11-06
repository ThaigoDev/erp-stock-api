import { Request, Response } from "express"
import { UserService } from "./user.service";
const userService = new UserService();
export class UserController {
  async register (req:Request, res: Response){
     const user =  await userService.create(req.body);
     return res.status(201).json(user);
  }
  async login( req:Request, res:Response) {
    try {
      const user = await userService.auth(req.body);
      if(user) {
         return res.status(200).json(user)
      }else {
        throw new Error("")
      }

    }catch (e:any) {
      console.log(e);
    }
  }
}
