import { Router } from "express";
import { Request, Response } from "express";
import { AddUserController } from "../../controller/user/Add";
import { ListUsers } from "../../controller/user/List";
import { UserLogin } from "../../controller/user/Login";
import { RemoveUser } from "../../controller/user/Remove";
import { UserUpdate } from "../../controller/user/Update";
import multer from 'multer';
import { multerConfig } from "../../config/multer";
import { FetchUser } from "../../controller/user/Fetch";
import { verifyToken } from "../../middlewares/verifyToken";
import { LogOutController } from "../../controller/user/LogOut";
const userRoutes = Router();

userRoutes.get("/user", verifyToken, async (req:Request, res:Response)=>{
   return  await new ListUsers().handle(req, res);
})
//TODO Id não irá mais trafegar pela rota, já que middleware irá validar pelo token
userRoutes.get("/user/:id", verifyToken, async (req:Request, res:Response)=>{
   return await new FetchUser().handle(req, res);
})
userRoutes.post("/user", multer(multerConfig).single("userImage"), async (req:Request, res:Response)=>{
   return  await new AddUserController().hadnle(req, res);
})
userRoutes.post("/user/login", async (req:Request, res:Response)=>{
   return  await new UserLogin().handle(req, res);
})
userRoutes.delete("/user", verifyToken, async (req:Request, res:Response)=>{
   return  await new RemoveUser().handle(req, res);
})
userRoutes.put("/user",verifyToken, multer(multerConfig).single("userImage"), async (req:Request, res:Response)=>{
   return  await new UserUpdate().handle(req, res);
})
userRoutes.get("/logOut",verifyToken, async (req:Request, res:Response)=>{
  
   return  await new LogOutController().handle(req, res)
} )

export {userRoutes}