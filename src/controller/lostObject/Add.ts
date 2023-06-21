import { Request, Response } from "express";
import { LostObjectRegisterDTO } from "../../model/lostObject/LostObjectRegisterDTO";
import { LostObjectDAO } from "../../connection/implementations/LostObjectDAO";
import { ResponseModel } from "../../util/ResponseModel";

export class AddLostObjectController {
    async handle(req:Request, res:Response){
        try {
            let connection = new LostObjectDAO();
            let ifFileIsEmpty = ''
            if(req.file == undefined) ifFileIsEmpty = "defaultObject.png"
            let objectDTO:LostObjectRegisterDTO
            if(ifFileIsEmpty.length >0){
                objectDTO = new LostObjectRegisterDTO(req.body, ifFileIsEmpty); 
            }else{
                objectDTO = new LostObjectRegisterDTO(req.body, req.file.filename)
            }
            let result = await connection.save(objectDTO)
            if(result.has_error) return res.status(400).json(result)
            res.status(200).json(result)
        } catch (error) {
            res.status(400).json(new ResponseModel(error.message, true))
        }
    }
}