import { Router } from "express";
import { Request, Response } from "express";
import { AddUserController } from "../../controller/user/Add";
import { ListUsers } from "../../controller/user/List";
import { UserLogin } from "../../controller/user/Login";
import { RemoveUser } from "../../controller/user/Remove";
import { UserUpdate } from "../../controller/user/Update";
import multer from 'multer';
import { multerConfig } from "../../config/multer";
const userRoutes = Router();

userRoutes.get("/user", async (req:Request, res:Response)=>{
   return  await new ListUsers().handle(req, res);
})
userRoutes.post("/user", multer(multerConfig).single("userImage"), async (req:Request, res:Response)=>{
   return  await new AddUserController().hadnle(req, res);
})
userRoutes.post("/user/login", async (req:Request, res:Response)=>{
   return  await new UserLogin().handle(req, res);
})
userRoutes.delete("/user/", async (req:Request, res:Response)=>{
   return  await new RemoveUser().handle(req, res);
})
userRoutes.put("/user/", async (req:Request, res:Response)=>{
   return  await new UserUpdate().handle(req, res);
})

export {userRoutes}