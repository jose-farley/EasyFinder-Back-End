import { Request, Response } from "express";
import { LostObjectDAO } from "../../connection/implementations/LostObjectDAO";

export class ListLostObjects {
    async handle(req:Request, res:Response){
        let connection = new LostObjectDAO();
        // if (req) {
            
        // }
        let result = await connection.list(req);
        if(result.has_error){
            return res.status(400).json(result)
        }else{
            return res.status(200).json(result)
        }
    }
}