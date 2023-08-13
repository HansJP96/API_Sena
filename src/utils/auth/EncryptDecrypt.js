import crypto from "crypto-js"
import { randomBytes } from "crypto"

const { AES, enc } = crypto
/**
 * Metodo para encriptar textos segun el esquema AES
 * @param {string} text 
 * @param {string} key 
 * @returns Texto encriptado
 */
export const encrypter = (text, key) => {
    return AES.encrypt(text, key).toString()
}

/**
 * Metodo para desencriptar textos encriptados mediante el esquema AES
 * @param {string} text 
 * @param {string} key 
 * @returns Texto original
 */
export const decrypter = (text, key) => {
    return AES.decrypt(text, key).toString(enc.Utf8)
}

/**
 * Metodo para generar una cadena aletoria para el cifrado de textos
 * @returns Cadena leatoria hexadecimal
 */
export const saltGenerator = () => {
    return randomBytes(20).toString("hex")
}