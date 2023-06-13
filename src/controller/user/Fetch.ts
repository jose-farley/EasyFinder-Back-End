import { Request, Response } from "express";
import { UserDAO } from "../../connection/implementations/UserDAO";
export class FetchUser {
    async handle(req:Request, res:Response){
        const {id} = req.params
        let connection = new UserDAO()
        let result = await connection.fetch(id);
        if(result.has_error){
            return res.status(400).json(result)
        }else{
            return res.status(200).json(result) 
        }
        
    }
}