import 'reflect-metadata';
import dotenv from 'dotenv';
import { Router } from 'express';
import { SignJWT } from 'jose';

import { getRolService } from "../services/getServices.js";

export const getRolController = async (req, res, next) => {
    const { user, pass } = req.query;
    try {
        const result = await getRolService(user, pass);
        if (result.length != 0) {
            const encoder = new TextEncoder();
            const jwtconstructor = new SignJWT(Object.assign({}, Object.assign(result[0])));
            const jwt = await jwtconstructor
                .setProtectedHeader({ alg: "HS256", typ: "JWT" })
                .setIssuedAt()
                .setExpirationTime("60h")
                .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
            req.data = jwt;
            res.status(201).send({ status: 201, message: jwt });
        } else {
            res.status(500).json({ message: "No se ha encontrado ningun usuario con esas credenciales" })
        }
    } catch (error) {
        res.status(500).json({ message: `error detectado`, error: error.message })
    }
}
