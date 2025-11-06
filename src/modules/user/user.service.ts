import { CreateUserDTO } from "./dtos/create-user.dto";
import { ResponseUserDTO } from "./dtos/response-user.dto";
import { createUserSchema } from "./user.schema";
import { UserRepository } from "./user.repository";
import { User } from "./entities/user.entity";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";
const userRepository = new UserRepository();
export class UserService {
  async create(data: CreateUserDTO) {
    const validated = createUserSchema.parse(data);
    return userRepository.create(validated);
  }
  async auth(data: CreateUserDTO): Promise<ResponseUserDTO> {
    const validated = createUserSchema.parse(data);
    try {
      const userFinded = await userRepository.findByEmail(validated.email);

      if (!userFinded) {
        throw new Error("Usuário não encontrado!");
      }
      const passwordMatch = await compare(
        validated.password,
        userFinded.password
      );
      if (!passwordMatch) {
        throw new Error("Senha inválida !");
      }
      const token = jwt.sign(
        {
          sub: userFinded.id,
          email: userFinded.email,
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "7d",
        }
      );
      return {
        ...userFinded,
        token,
      };
    } catch (e: any) {
      throw new Error(e);
    }
  }
}
