import { LostObjectDAO } from '../../connection/implementations/LostObjectDAO'
import { LostObjectUpdateDTO } from '../../model/lostObject/LostObjectUpdateDTO';
import { Request, Response } from 'express';
import { ResponseModel } from '../../util/ResponseModel';

export class LostObjectUpdate {
    async handle(request:Request, response:Response){
        try {
            let connection = new LostObjectDAO();
            let ifFileIsEmpty = ''
            //TODO update de imagem n funciona
            if(request.file == undefined) ifFileIsEmpty = "defaultObject.png"
            let objectDTO:LostObjectUpdateDTO
            if(ifFileIsEmpty.length >0){
                objectDTO = new LostObjectUpdateDTO(request.body, ifFileIsEmpty); 
            }else{
                objectDTO = new LostObjectUpdateDTO(request.body, request.file.filename)
            }            
            let result = await connection.update(objectDTO);
            if(result.has_error) return response.status(400).json(result)
            return response.status(200).json(result)
        } catch (error) {
            return response.status(400).json(new ResponseModel(error.message, true))
        }
       
    }
}