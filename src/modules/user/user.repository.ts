import { prisma } from "../../database/prisma";
import { User } from "./entities/user.entity";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { ResponseUserDTO } from "./dtos/response-user.dto";
export class UserRepository {
  async create(data: CreateUserDTO): Promise<User> {
    try {
      const user = await prisma.user.create({ data });
      return new User(
        user.id,
        user.name, 
        user.email,
        user.password,
        user.createdAt
      );
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (user) {
      return new User(
        user.id,
        user.name,
        user.email,
        user.password,
        user.createdAt
      );
    } else {
      throw new Error('Usuário não encontrado!');
    }
  }
}
