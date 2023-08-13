import express from "express";
import { registerNewUser } from "../controllers/auth/Register.js";
import { logInUser } from "../controllers/auth/LogIn.js";

/**
 * Manejador de rutas relacionadas con el modulo de Autenticacion
 */
const authRoutes = express.Router()

authRoutes.get("/login", logInUser)
authRoutes.post("/register", registerNewUser)

export default authRoutes