import { Router } from "express";
import { Request, Response } from "express";
import { UserDTO } from "../../DTO/user/UserDTO";
import { AddUserController } from "../../controller/user/AddUser";
const userRoutes = Router();

userRoutes.post("/user", (req:Request, res:Response)=>{
   return  new AddUserController().hadnle(req, res);
})

export {userRoutes}