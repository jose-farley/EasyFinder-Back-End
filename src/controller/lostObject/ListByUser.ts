import { Request, Response } from "express";
import { LostObjectDAO } from "../../connection/implementations/LostObjectDAO";

export class ListLostObjectsByUser {
    async handle(req:Request, res:Response){
        const {id} = req.params;
        let connection = new LostObjectDAO();
        let result = await connection.listByUser(id);
        if(result.has_error){
            return res.status(400).json(result)
        }else{
            return res.status(200).json(result)
        }
    }
}