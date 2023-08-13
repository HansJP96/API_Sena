import { mongoose } from 'mongoose'

/**
 * Metodo para inicializar la conexion con la base de datos de MongoDB a la coleccion 'autenticacion_sena'
 */
const setUpMongoConnection = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/autenticacion_sena');
        console.log('Se establecio conexion con MongoDB')
    } catch (err) {
        console.error('Ocurrio un err conectando con la base de datos de Mongo')
        console.error(err)
    }
}

export default setUpMongoConnection