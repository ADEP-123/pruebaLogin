import { Router } from 'express';
import { getRolController } from '../controllers/getControllers.js';

export const getInitRoute = () => {
    const router = Router();
    router.get("/usuarios", getRolController);
    return router
}