import { Router } from "express";
import { Request, Response } from "express";
import { AddUserController } from "../../controller/user/AddUser";
import { ListUsers } from "../../controller/user/ListUsers";
import { UserLogin } from "../../controller/user/Login";
const userRoutes = Router();


userRoutes.get("/user", async (req:Request, res:Response)=>{
   return  await new ListUsers().handle(req, res);
})

userRoutes.post("/user", async (req:Request, res:Response)=>{
   return  await new AddUserController().hadnle(req, res);
})
userRoutes.post("/user/login", async (req:Request, res:Response)=>{
   return  await new UserLogin().handle(req, res);
})

export {userRoutes}