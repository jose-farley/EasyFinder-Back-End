import { Request, Response, NextFunction } from "express";
import { ResponseModel } from "../util/ResponseModel";
import jwt from 'jsonwebtoken'

export function verifyToken (req:Request, res:Response, next:NextFunction){
    try {
        if(req.headers['authorization'] == undefined) throw new Error("Unauthorized")
        if(req.headers['authorization'].length < 8) throw new Error("Unauthorized")
        jwt.verify(req.headers['authorization'], process.env.JWT_SECRET)
        next()
    } catch (error) {
        return res.status(400).json(new ResponseModel("unauthorized", true))
    }
}