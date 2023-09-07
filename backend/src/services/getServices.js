import Usuarios from "../collections/usuarios.js";


export const getRolService = async (user, pass) => {
    const usuario = new Usuarios();
    const result = await usuario.getRol(user, pass);
    return result;
};

