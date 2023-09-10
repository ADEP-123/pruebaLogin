import { Router } from "express";
import { getInitRoute } from "./getDataRoutes.js";
import { middlewareRateLimit } from "../middleware/ratelimitMiddleware.js";
import { appToken } from "../utils/tokenGenerator.js";
import { authorizationMiddleware } from "../middleware/authorizationMiddleware.js";


const initApiRoutes = () => {
    const router = Router();
    router.use("/login", middlewareRateLimit, appToken)
    router.use("/get", middlewareRateLimit, authorizationMiddleware, getInitRoute())
    return router
}

export default initApiRoutes