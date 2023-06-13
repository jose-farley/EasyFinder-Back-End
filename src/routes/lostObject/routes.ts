import { Router } from "express";
import { Request, Response } from "express";
import { AddLostObjectController } from "../../controller/lostObject/Add";
import { ListLostObjects } from "../../controller/lostObject/List";
import { FetchLostObject } from "../../controller/lostObject/Fetch";
import { RemoveLostObject } from "../../controller/lostObject/Remove";
const lostObjectRoutes = Router();

lostObjectRoutes.post("/lostObject", async (req:Request, res:Response)=>{
    return await new AddLostObjectController().handle(req, res);
})
lostObjectRoutes.get("/lostObject", async (req:Request, res:Response)=>{
    return await new ListLostObjects().handle(req, res);
})
lostObjectRoutes.get("/lostObject/:id", async (req:Request, res:Response)=>{
    return await new FetchLostObject().handle(req, res);
} )
lostObjectRoutes.delete("/lostObject", async (req:Request, res:Response)=>{
    return await new RemoveLostObject().handle(req, res);
})
export {lostObjectRoutes}