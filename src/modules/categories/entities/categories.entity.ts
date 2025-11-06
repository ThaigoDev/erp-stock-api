import { Status } from "@prisma/client";

export class Category{
  constructor (public id : number, public name:string, public description: string, public status:Status, public createAt:Date) {}
}
