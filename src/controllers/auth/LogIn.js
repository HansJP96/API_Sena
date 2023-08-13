import { Error } from "mongoose"
import { User } from "../../models/Users.js"
import { decrypter } from "../../utils/auth/EncryptDecrypt.js"
import { clientError, serverError, successful } from "../../utils/codes/ResponseCodes.js"
import { validatePassword } from "../../utils/validations/validators/AuthValidations.js"
import { invalidPassword } from "../../utils/validations/MongooseErrors/AuthErrors.js"

/**
 * Endpoint para el inicio de sesion de un usuario mediante Correo y Contraseña
 * @param {Request} req 
 * @param {Response} res 
 */
export const logInUser = async (req, res) => {
    const userTryingLogIn = new User(req.body)

    await User.validate(userTryingLogIn, ["email"])
        .then(() => {
            return User.findOne({ email: userTryingLogIn.email }).orFail()
        })
        .then(userResult => {
            const { password, saltValue, ...userFound } = userResult.toObject()
            const userPassword = decrypter(password, saltValue)

            if (validatePassword(userPassword, userTryingLogIn.password)) return userFound
            else invalidPassword(userResult)
        }).then(loggedUser => {
            res.status(successful.OK).json(loggedUser)
            console.info("El usuario se autentico correctamente")
        }).catch(err => {
            if (err instanceof Error.ValidationError) res.status(clientError.UNAUTHORIZED).json(err)
            else if (err instanceof Error.DocumentNotFoundError) {
                const { name, message, query } = err
                res.status(clientError.NOT_FOUND).json({ name, query, message })
            }
            else res.status(serverError.INTERNAL_SERVER_ERROR).json(err)
            console.error("Ocurrio un error autenticando al usuario")
            console.error(err)
        })
}
