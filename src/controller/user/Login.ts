import {Request, Response} from 'express'
import { UserDAO } from '../../connection/implementations/UserDAO';
import { ResponseModel } from '../../util/ResponseModel';
import { UserLoginDTO } from '../../contract/user/UserLoginDTO';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export class UserLogin {
    async handle(req:Request, res:Response){
        try{   
            if(!req.body.email && !req.body.password){
                return res.json(new ResponseModel("E-mail e senha não foram fornecidos", true))
            }
            if(req.body.email== undefined || req.body.password == undefined){
                return res.json(new ResponseModel("E-mail ou senha não foram fornecidos", true))
            }
            let userData = new UserLoginDTO(req.body);      
            let connection = new UserDAO();
            let result = await connection.login(userData);
            if(result.has_error) return res.json(result)
            let isValidPassword = await bcrypt.compareSync(userData.getPassword(), result.data.password)
            if(!isValidPassword) return new ResponseModel("E-mail or password not valid", true)
            let payload = {email: result.data.email, id:result.data.id}
            let token = await jwt.sign(payload, process.env.JWT_SECRET)
            res.setHeader("authorization", token);
            return res.send(new ResponseModel("You're logged now!", false))

        }catch(error){
            return res.json(new ResponseModel(error.message, true))
        }
    }
}