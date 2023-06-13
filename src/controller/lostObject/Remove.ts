import { Request, Response } from "express";
import { ResponseModel } from "../../util/ResponseModel";
import { LostObjectDAO } from "../../connection/implementations/LostObjectDAO";
export class RemoveLostObject {
    async handle(req:Request, res:Response){
        if(req.body.id == undefined) return new ResponseModel("Id wasn't passed", true)
        let connection = new LostObjectDAO();
        let result = await connection.remove(req.body.id);
        if(result.has_error){
            return res.status(400).json(result)
        }else{
            return res.status(200).json(result)
        }
    }
}