import { Request, Response } from 'express';
import { UserDAO } from '../../connection/implementations/UserDAO';
import { ResponseModel } from "../../util/ResponseModel";

export class GetUser {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params; // Obtém o ID do usuário a partir dos parâmetros da requisição
      const connection = new UserDAO();
      const result = await connection.fetch(id);

      if (result.has_error) {
        return res.status(400).json(result);
      } else {
        return res.status(200).json(result);
      }
    } catch (error) {
        return res.json(new ResponseModel(error.message, true))  ;
    }
  }
}