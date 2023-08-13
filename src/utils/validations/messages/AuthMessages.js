/**
 * Objeto de mensajes de validacion para el modelo 'usuarios'
 */
export const authMessages = {
    REQUIRED_FIRST_NAME: "Debe colocar un nombre",
    MIN_LENGTH_FIRST_NAME: "EL nombre de contener al menos 3 caracteres",
    REQUIRED_LAST_NAME: "Debe colocar un apellido",
    MIN_LENGTH_LAST_NAME: "EL apellido de contener al menos 3 caracteres",
    REQUIRED_EMAIL: "Es obligatorio colocar un correo",
    FORMAT_EMAIL: "El correo no contiene un formato adecuado, por favor seguir la estructura: example@gmail.com",
    FORMAT_PASSWORD: "Colocar al menos 1 letra en mayuscula, 1 en minuscula y 1 digito",
    REQUIRED_PASSWORD: "Es obligatorio colocar una contraseña",
    MIN_LENGTH_PASSWORD: "La contraseña debe contener al menos 8 caracteres",
    INCORRECT_PASSWORD: "La contraseña es incorrecta"
}