import { Error } from "mongoose";
import { authMessages } from "../messages/AuthMessages.js";
import { User } from "../../../models/Users.js";

/**
 * Metodo para manejar la excepcion por validacion de contraseña incorrecta
 * @param {User} userData 
 */
export const invalidPassword = userData => {
    const error = new Error.ValidationError(userData)
    error.errors.password = new Error.ValidatorError({
        message: authMessages.INCORRECT_PASSWORD,
        path: "password"
    })
    throw error
}