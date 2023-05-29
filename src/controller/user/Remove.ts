import { Request, Response } from "express";
import { ResponseModel } from "../../util/ResponseModel";
import { UserDAO } from '../../connection/implementations/UserDAO'
export class RemoveUser {
    async handle(request:Request, response:Response){
        if(request.body.id == undefined) return new ResponseModel("you didn't pass a user id", true)
        let connection = new UserDAO();
        let result = await connection.remove(request.body.id)
        if(result.has_error) return response.status(400).json(result)
        return response.status(200).json(result)
    }
}