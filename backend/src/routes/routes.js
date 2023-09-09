import { Router } from "express";
import { getInitRoute } from "./getDataRoutes.js";
import { middlewareRateLimit } from "../middleware/ratelimitMiddleware.js";


const initApiRoutes = () => {
    const router = Router();
    // router.use("/login", (req, res, next) => {
    //     res.send("hola putos")
    // })
    router.use("/get", middlewareRateLimit, getInitRoute())
    return router
}

export default initApiRoutes