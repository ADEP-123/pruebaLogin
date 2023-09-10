import 'reflect-metadata';
import dotenv from 'dotenv';
import { Router } from 'express';
import { SignJWT } from 'jose';


dotenv.config();
const appToken = Router();

appToken.use("", async (req, res) => {
    try {
        const { user, pass } = req.body
        if (user && pass) {
            const encoder = new TextEncoder();
            const jwtconstructor = new SignJWT(Object.assign({}, Object.assign(req.body)));
            const jwt = await jwtconstructor
                .setProtectedHeader({ alg: "HS256", typ: "JWT" })
                .setIssuedAt()
                .setExpirationTime("60h")
                .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
            req.data = jwt;
            res.status(201).send({ status: 201, token: jwt });
        } else {
            res.status(404).send({ status: 404, message: `no se encontro informacion de usuario y contraseña en el body` });
        }
    } catch (error) {
        // console.log(error);
        res.status(404).send({ status: 404, message: `usuario no encontrado` });
    }
})

export {
    appToken,
};