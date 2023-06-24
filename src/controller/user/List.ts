import {Request, Response} from 'express'
import { UserDAO } from '../../connection/implementations/UserDAO'

export class ListUsers {
    async handle(req:Request, res:Response){
        try {
            let connection = new UserDAO();
            let result = await connection.list();
            if(result.has_error){
                return res.status(400).json(result)
            }else{
                return res.status(200).json(result)
            }    
        } catch (error) {
            
        }
         
    }
}