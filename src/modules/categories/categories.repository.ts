import { prisma } from "src/database/prisma";
import { CreateCategoryDTO } from "./dtos/create-category.dto";
import { Category } from "./entities/categories.entity";

export class CategoryRepository {
  async create(data:Category) :Promise<Category> {
    try {
      const category = await prisma.category.create({data})
      return new Category (
        category.id,
        category.name,
        category.description,
        category.status ,
        category.createAt
      )
    }catch (e:any) {
      throw new Error(e);
    }
  }
}
