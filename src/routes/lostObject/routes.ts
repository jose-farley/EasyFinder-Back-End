import { Router } from "express";
import { Request, Response } from "express";
import { AddLostObjectController } from "../../controller/lostObject/Add";
import { ListLostObjects } from "../../controller/lostObject/List";
import { FilterLostObject } from "../../controller/lostObject/Filter";
import { FetchLostObject } from "../../controller/lostObject/Fetch";
import { RemoveLostObject } from "../../controller/lostObject/Remove";
import { LostObjectUpdate } from "../../controller/lostObject/Update";
import multer from "multer";
import { multerConfig } from "../../config/multer";
import { verifyToken } from "../../middlewares/verifyToken";
import { ListLostObjectsByUser } from "../../controller/lostObject/ListByUser";
const lostObjectRoutes = Router();

lostObjectRoutes.post("/lostObject", verifyToken, multer(multerConfig).single("objectImage"), async (req:Request, res:Response)=>{
    return await new AddLostObjectController().handle(req, res);
})
lostObjectRoutes.get("/lostObject", verifyToken,async (req:Request, res:Response)=>{
    return await new ListLostObjects().handle(req, res);
})
lostObjectRoutes.get("/lostObject/:id", verifyToken,async (req:Request, res:Response)=>{
    return await new ListLostObjectsByUser().handle(req, res);
})
lostObjectRoutes.get("/lostObjectById/:id", verifyToken, async (req:Request, res:Response)=>{
    return await new FetchLostObject().handle(req, res);
} )
lostObjectRoutes.get("/lostObject/:filter/:found",verifyToken, async (req:Request, res:Response)=>{
    return await new FilterLostObject().handle(req, res);
} )
lostObjectRoutes.delete("/lostObject", verifyToken,async (req:Request, res:Response)=>{
    return await new RemoveLostObject().handle(req, res);
})
lostObjectRoutes.put("/lostObject/", verifyToken, multer(multerConfig).single("objectImage"), async (req:Request, res:Response)=>{
    return  await new LostObjectUpdate().handle(req, res);
 })
export {lostObjectRoutes}