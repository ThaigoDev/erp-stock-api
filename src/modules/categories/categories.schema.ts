import {z} from 'zod';
import { Status } from "@prisma/client";
export const  createCategorySchema = z.object({
  name : z.string().min(3,"O nome deve ter pelo menos 3 caracteres"),
  description: z.string().max(200, "A descrição deve ter no máximo 200 carateres"),
  status: z.enum(Status).default(Status.ATIVO),
  createAt: z.date()
})
