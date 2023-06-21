import { Request, Response } from "express";
import { LostObjectDAO } from "../../connection/implementations/LostObjectDAO";

export class FilterLostObject {
    async handle(req:Request, res:Response){
        const {filter, found} = req.params;
        let connection = new LostObjectDAO();
        let result = await connection.filter(filter, Boolean(found));
        if(result.has_error){
            return res.status(400).json(result)
        }else{
            return res.status(200).json(result)
        }
    }
}