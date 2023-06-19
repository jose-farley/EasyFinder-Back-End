import { LostObjectDAO } from '../../connection/implementations/LostObjectDAO'
import { LostObjectUpdateDTO } from '../../model/lostObject/LostObjectUpdateDTO';
import { Request, Response } from 'express';
import { ResponseModel } from '../../util/ResponseModel';

export class LostObjectUpdate {
    async handle(request:Request, response:Response){
        try {
            let connection = new LostObjectDAO();
            let object = new LostObjectUpdateDTO(request.body)
            let result = await connection.update(object);
            if(result.has_error) return response.status(400).json(result)
            return response.status(200).json(result)
        } catch (error) {
            return response.status(400).json(new ResponseModel(error.message, true))
        }
       
    }
}