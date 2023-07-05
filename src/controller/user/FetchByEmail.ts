import { Request, Response } from "express";
import { UserDAO } from "../../connection/implementations/UserDAO";
export class FetchUserByEmail {
    async handle(req:Request, res:Response){
        const {email} = req.params
        let connection = new UserDAO()
        let result = await connection.fetchByEmail(email);
        if(result.has_error){
            return res.status(400).json(result)
        }else{
            return res.status(200).json(result) 
        }
        
    }
}