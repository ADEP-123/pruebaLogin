import { Router } from "express";


const initApiRoutes = () => {
    const router = Router();
    router.use("/login", (req, res, next) => {
        res.send("hola putos")
    })
}

export default initApiRoutes