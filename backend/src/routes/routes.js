import { Router } from "express";
import { getInitRoute } from "./getDataRoutes.js";


const initApiRoutes = () => {
    const router = Router();
    // router.use("/login", (req, res, next) => {
    //     res.send("hola putos")
    // })
    router.use("/get", getInitRoute())
    return router
}

export default initApiRoutes