import { UserDAO } from '../../connection/implementations/UserDAO'
import { UserUpdateDTO } from '../../contract/user/UserUpdateDTO';
import { Request, Response } from 'express';
import { ResponseModel } from '../../util/ResponseModel';
export class UserUpdate {
    async handle(request:Request, response:Response){
        try {
            let connection = new UserDAO();
            let user = new UserUpdateDTO(request.body)
            let result = await connection.update(user);
            if(result.has_error) return response.status(400).json(result)
            return response.status(200).json(result)
        } catch (error) {
            return response.status(400).json(new ResponseModel(error.message, true))
        }
       
    }
}