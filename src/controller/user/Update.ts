import { UserDAO } from '../../connection/implementations/UserDAO'
import { UserUpdateDTO } from '../../model/user/UserUpdateDTO';
import { Request, Response } from 'express';
import { ResponseModel } from '../../util/ResponseModel';
export class UserUpdate {
    async handle(request:Request, response:Response){
        try {
            let ifFileIsEmpty = ''
            if(request.file == undefined) ifFileIsEmpty = "defaultUser.png"
            let connection = new UserDAO();
            let userDTO:UserUpdateDTO
            if(ifFileIsEmpty.length >0){
                userDTO = new UserUpdateDTO(request.body, ifFileIsEmpty); 
            }else{
                userDTO = new UserUpdateDTO(request.body, request.file.filename)
            }

            let result = await connection.update(userDTO);
            if(result.has_error) return response.status(400).json(result)
            return response.status(200).json(result)
        } catch (error) {
            return response.status(400).json(new ResponseModel(error.message, true))
        }
       
    }
}