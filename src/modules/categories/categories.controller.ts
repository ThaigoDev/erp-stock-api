import { Request,Response } from "express"
import { CreateCategoryDTO } from "./dtos/create-category.dto";
import { CategoryService } from "./categories.service";
import { ResponseCategoryDTO } from "./dtos/response-category.dto";
const  categoryService = new CategoryService();
export class CategoryController{
  async create(req:Request,res: Response) {
    try{
      const category = await categoryService.create(req.body);
      return res.status(201).json(category)
    }catch(e:any) {
      throw new Error(e);
    }
  }
}
