/**
 * Codigos de respuesta HTTP exitosos
 */
export const successful = {
    OK: 200,
    CREATED: 201,
    OK_NOT_CONTENT: 204
}

/**
 * Codigos de respuesta HTTP con error desde cliente
 */
export const clientError = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404
}

/**
 * Codigos de respuesta HTTP por error desde el servidor
 */
export const serverError = {
    INTERNAL_SERVER_ERROR: 500
}