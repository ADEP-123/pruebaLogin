import { collectionGen, startTransaction } from "../utils/db.js";

class Usuarios {
    constructor() { }

    async getRol(user, pass) {
        let session;
        try {
            session = await startTransaction();
            const coleccion = await collectionGen("usuarios");
            const result = coleccion.aggregate([
                {
                    $match: {
                        usuario: user,
                        contraseña: pass
                    }
                },
                {
                    $project: {
                        rol: 1,
                        _id: 0
                    }
                }
            ]).toArray();
            await session.commitTransaction();
            return result;
        } catch (error) {
            if (session) {
                await session.abortTransaction();
            }
            throw error;
        } finally {
            if (session) {
                session.endSession();
            }
        }
    }
}
export default Usuarios;