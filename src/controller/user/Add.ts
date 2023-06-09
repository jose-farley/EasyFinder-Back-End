import { Request, Response } from "express";
import { ResponseModel } from "../../util/ResponseModel";
import { UserDAO } from "../../connection/implementations/UserDAO";
import { UserDTO } from "../../model/user/UserRegisterDTO";

export class AddUserController {
    async hadnle(req:Request, res:Response){
        try {
            let ifFileIsEmpty = ''
            if(req.file == undefined) ifFileIsEmpty = "defaultUser.png"
            let acess = new UserDAO();
            let user:UserDTO
            if(ifFileIsEmpty.length >0){
                user = await new UserDTO(req.body, ifFileIsEmpty); 
            }else{
                user = await new UserDTO(req.body, req.file.filename)
            }
            let result = await acess.save(user);
            if(result.has_error){
                return res.status(400).json(result)
            }else{
                return res.status(200).json(result)
            }
        } catch (error) {
            return res.json(new ResponseModel(error.message, true));
        }   
    }
}