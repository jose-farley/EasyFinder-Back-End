import { Request, Response } from "express";
import { UserDTO } from "../../DTO/user/UserDTO";
import { ResponseModel } from "../../util/ResponseModel";


export class AddUserController {
    async hadnle(req:Request, res:Response){
        try {
            const user = new UserDTO(req.body); 
            return res.json(new ResponseModel(user, false));    
        } catch (error) {
            return res.json(new ResponseModel(error.message, true))  ;
        }   
    }
}