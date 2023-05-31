import { Router } from "express";
import { Request, Response } from "express";
import { AddLostObjectController } from "../../controller/lostObject/Add";
const lostObjectRoutes = Router();

lostObjectRoutes.post("/lostObject", async (req:Request, res:Response)=>{
    console.log(req.body)
    return await new AddLostObjectController().handle(req, res);
})
export {lostObjectRoutes}