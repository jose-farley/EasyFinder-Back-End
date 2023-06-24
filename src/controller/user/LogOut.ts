import { Request, Response } from "express";
import jwt from 'jsonwebtoken'
export class LogOutController {
    async handle(req:Request, res:Response){
        let decoded = jwt.verify(req.headers['authorization'], process.env.JWT_SECRET)
    }
}
/**
 * {
  email: 'admin@gmail.com',
  id: '477b67f4-0f75-4e3a-adb1-24ca010a50df',
  iat: 1687648001,
  exp: 1687651601
}
 */