import { getRolService } from "../services/getServices.js";

export const getRolController = (req, res, next) => {
    const { user, pass } = req.body;
    try {
        const result = getRolService(user, pass);
        res.status(200).json({ message: `se han encontrado ${result.length} resultados`, result })
    } catch (error) {
        res.status(500).json({ message: `error detectado`, error: error.message })
    }
}