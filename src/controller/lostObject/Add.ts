import { Request, Response } from "express";
import { LostObjectRegisterDTO } from "../../model/lostObject/LostObjectRegisterDTO";
import { LostObjectDAO } from "../../connection/implementations/LostObjectDAO";
import { ResponseModel } from "../../util/ResponseModel";

export class AddLostObjectController {
    async handle(req:Request, res:Response){
        try {
            let objectDTO = new LostObjectRegisterDTO(req.body);
            let connection = new LostObjectDAO();
            let result = await connection.save(objectDTO)
            if(result.has_error) return res.status(400).json(result)
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json(new ResponseModel(error.message, true))
        }
    }
}