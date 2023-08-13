/**
 * Metodo para validar que el correo electronico cumpla con los criterios de estructura de un correo 
 * @param {string} email 
 * @returns {boolean}
 */
export const validateEmailFormat = (email) => {
    return new RegExp("^[^\\W_]+\\w*(?:[.-]\\w*)*[^\\W_]+@[^\\W_]+(?:[.-]?\w*[^\\W_]+)*(?:\\.)([^\\W_]{2,})$").test(email)
}

/**
 * Metodo para validar que la contraseña a utilizar por el usuario cumpla con ciertos criterios:
 * - Al menos 1 caracter en Mayuscula
 * - Al menos 1 caracter en Minuscula
 * - Al menos 1 digito
 * - Longitud minima de 8 caracteres
 * @param {string} password 
 * @returns {boolean}
 */
export const validatePasswordFormat = (password) => {
    return new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$").test(password)
}
/**
 * Metodo para validar que la contraseña real del usuario y la utilizada para iniciar sesion sean las mismas
 * @param {string} userPassword Contraseña real del usuario
 * @param {string} logInPassword Contraseña utilizada para intentar iniciar sesion
 * @returns {boolean}
 */
export const validatePassword = (userPassword, logInPassword) => {
    return userPassword === logInPassword
}