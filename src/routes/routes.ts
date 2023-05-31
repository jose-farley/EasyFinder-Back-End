import { Router } from "express";
import { userRoutes } from "./user/routes";
import { lostObjectRoutes } from "./lostObject/routes";

const routes = Router();

routes.use(lostObjectRoutes);
routes.use(userRoutes);

export {routes}