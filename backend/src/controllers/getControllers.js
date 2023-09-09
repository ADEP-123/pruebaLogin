import { getRolService } from "../services/getServices.js";

export const getRolController = async (req, res, next) => {
    const { user, pass } = req.body;
    try {
        const result = await getRolService(user, pass);
        if (result.length != 0) {
            res.status(200).json({ rol: result[0].rol })
        } else {
            res.status(500).json({ message: "No se ha encontrado ningun usuario con esas credenciales" })
        }
    } catch (error) {
        res.status(500).json({ message: `error detectado`, error: error.message })
    }
}