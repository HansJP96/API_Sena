import express from 'express'
import authRoutes from './AuthRoutes.js'
/**
 * Manejador de rutas de la API
 */
const routes = express.Router()

routes.use("/auth", authRoutes)

export default routes