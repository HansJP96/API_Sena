import { Error } from "mongoose"
import { User } from "../../models/Users.js"
import { encrypter, saltGenerator } from "../../utils/auth/EncryptDecrypt.js"
import { clientError, serverError, successful } from "../../utils/codes/ResponseCodes.js"
/**
 * Endpoint para el registro de nuevos usuarios solicitando Nombre, Apellido, Correo y Contraseña
 * @param {Request} req 
 * @param {Response} res 
 */
export const registerNewUser = async (req, res) => {
    const user = new User(req.body)

    const originalPassword = user.password
    const salt = saltGenerator()

    await User.validate(user, ["email", "password"])
        .then(() => {
            user.password = encrypter(originalPassword, salt)
            user.saltValue = salt
            return user.save()
        }).then(createdUser => {
            const { password, saltValue, ...registeredUser } = createdUser.toObject()
            res.status(successful.CREATED).json(registeredUser)
            console.info("El nuevo usuario se creo exitosamente")
        }).catch(err => {
            if (err instanceof Error.ValidationError) res.status(clientError.BAD_REQUEST).json(err)
            else res.status(serverError.INTERNAL_SERVER_ERROR).json(err)
            console.error("Ocurrio un error en la creacion del usuario")
            console.error(err)
        })
}