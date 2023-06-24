import { LostObjectDAO } from '../../connection/implementations/LostObjectDAO'
import { LostObjectUpdateDTO } from '../../model/lostObject/LostObjectUpdateDTO';
import { Request, Response } from 'express';
import { ResponseModel } from '../../util/ResponseModel';

export class LostObjectUpdate {
    async handle(request:Request, response:Response){
        try {
            let connection = new LostObjectDAO()
            let result
            if(request.file == undefined){
                 result = await connection.update(request.body);
            }else {
                result = await connection.update(request.body, request.file.filename);

            }
            if(result.has_error) return response.status(400).json(result)
            return response.status(200).json(result)
        } catch (error) {
            console.log('caiu')
            return response.status(400).json(new ResponseModel(error.message, true))
        }
       
    }
}