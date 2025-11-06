import { Status } from "@prisma/client";

export interface ResponseCategoryDTO {
  name:string;
  description:string;
  status: Status
}
