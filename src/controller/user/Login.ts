import {Request, Response} from 'express'
import { UserDAO } from '../../connection/implementations/UserDAO';
import { ResponseModel } from '../../util/ResponseModel';
import { UserLoginDTO } from '../../model/user/UserLoginDTO';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export class UserLogin {
    async handle(req:Request, res:Response){
        try{   
            if(this.passwordAndEmailHasBeenPassed(req).has_error==true) return this.passwordAndEmailHasBeenPassed(req)
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
    private passwordAndEmailHasBeenPassed(request:Request){
        if(!request.body.email && !request.body.password){
            return new ResponseModel("E-mail e senha não foram fornecidos", true)
        }
        if(request.body.email== undefined || request.body.password == undefined){
            return new ResponseModel("E-mail ou senha não foram fornecidos", true)
        }
        return new ResponseModel("E-mail ou senha não foram fornecidos", true)
    }
}
