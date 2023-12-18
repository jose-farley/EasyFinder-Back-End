import {Request, Response} from 'express'
import { UserDAO } from '../../connection/implementations/UserDAO';
import { ResponseModel } from '../../util/ResponseModel';
import { UserLoginDTO } from '../../model/user/UserLoginDTO';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export class UserLogin {
    async handle(req:Request, res:Response){
     
        try{ 
            let werePassed = this.passwordAndEmailHasBeenPassed(req);
            if(werePassed.has_error==true) return res.status(400).json(werePassed)
            let userData = new UserLoginDTO(req.body);      
            let connection = new UserDAO();
            let result = await connection.login(userData);
            if(result.has_error) return res.status(400).json(result)
            let isValidPassword = await bcrypt.compare( userData.getPassword(), result.data.password,)
            console.log(isValidPassword)
            if(!isValidPassword) return res.status(500).json(new ResponseModel("E-mail or password not valid", true))
            let payload = {email: result.data.email, id:result.data.id}
            let token =  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })
            // res.setHeader("authorization", token);
            return res.json(new ResponseModel(token, false))

        }catch(error){
            return res.json(new ResponseModel(error.message, true))
        }
    }
    private passwordAndEmailHasBeenPassed(request:Request){
        if((request.body.email == undefined) && (request.body.password== undefined)){
            return new ResponseModel("E-mail e senha não foram fornecidos", true)
        }
        if(request.body.email== undefined || request.body.password == undefined){
            return new ResponseModel("E-mail ou senha não foram fornecidos", true)
        }
        return new ResponseModel("everyting okay", false)
    }
}
