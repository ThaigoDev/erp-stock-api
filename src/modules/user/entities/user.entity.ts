export class User {
  constructor(public id:number, public name:string, public email:string,public password:string, public createAt:Date, public token?:string) {}
}
