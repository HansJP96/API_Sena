import mongoose from 'mongoose';
import { validateEmailFormat, validatePasswordFormat } from '../utils/validations/validators/AuthValidations.js';
import { authMessages } from '../utils/validations/messages/AuthMessages.js';

const { Schema } = mongoose;

/**
 * Esquema de Mongoose para el modelo 'usuarios'
 */
export const userSchema = new Schema({
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, authMessages.REQUIRED_EMAIL],
        validate: {
            validator: validateEmailFormat,
            message: authMessages.FORMAT_EMAIL
        }
    },
    password: {
        type: String,
        minLength: [8, authMessages.MIN_LENGTH_PASSWORD],
        required: [true, authMessages.REQUIRED_PASSWORD],
        validate: {
            validator: validatePasswordFormat,
            message: authMessages.FORMAT_PASSWORD
        }
    },
    saltValue: {
        type: String,
        required: true
    }
}, { strict: true })

/**
 * Objeto de la coleccion - modelo 'usuarios' de la Base de Datos
 */
export const User = mongoose.model("usuarios", userSchema)
