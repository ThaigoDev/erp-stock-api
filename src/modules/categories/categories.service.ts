import { createCategorySchema } from "./categories.schema";
import { CreateCategoryDTO } from "./dtos/create-category.dto";
import { ResponseCategoryDTO } from "./dtos/response-category.dto";
import { CategoryRepository } from "./categories.repository";
const categoryRepository = new CategoryRepository()
export class CategoryService {
  async create(data:CreateCategoryDTO) : Promise<ResponseCategoryDTO> {
    try{
      const validated= createCategorySchema.parse(data);
      const categoryCreated = await categoryRepository.create({id:0,...validated});
      return categoryCreated;
    }catch(e:any) {
      throw new Error(e);
    }
  }
}
