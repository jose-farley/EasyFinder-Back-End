import { Router } from "express";
import { Request, Response } from "express";
import { AddUserController } from "../../controller/user/AddUser";
import { ListUsers } from "../../controller/user/ListUsers";
const userRoutes = Router();


userRoutes.get("/user", (req:Request, res:Response)=>{
   return  new ListUsers().handle(req, res);
})

userRoutes.post("/user", (req:Request, res:Response)=>{
   return  new AddUserController().hadnle(req, res);
})

export {userRoutes}