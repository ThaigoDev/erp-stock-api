import { Status } from "@prisma/client";

export interface CreateCategoryDTO {
  name:string;
  description:string;
  status: Status
}
