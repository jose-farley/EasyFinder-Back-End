import { Request, Response } from "express";
import { UserDTO } from "../../DTO/user/UserDTO";
import { ResponseModel } from "../../util/ResponseModel";
import { UserDAO } from "../../DAO/implementations/UserDAO";


export class AddUserController {
    async hadnle(req:Request, res:Response){
        try {
            let acess = new UserDAO();
            const user = new UserDTO(req.body); 
            let result = await acess.save(user);
            if(result.has_error){
                return res.status(400).json(result)
            }else{
                return res.status(200).json(result)
            }
        } catch (error) {
            return res.json(new ResponseModel(error.message, true))  ;
        }   
    }
}