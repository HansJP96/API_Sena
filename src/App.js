import express from 'express'
import mongoConnection from './utils/connections/MongoConnection.js'
import routes from './routes/routes.js'

const port = 3001

const app = express()

app.use(express.json())

// Espera por la conexion con la Base de Datos
await mongoConnection()

// Endpoint base para conectar con la API
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Registro e Inicio de Sesion')
})

// Middleware para la gestion de las rutas de la API
app.use(routes)

// Inicializacion del servidor en el puerto especificado
app.listen(port, ()=>{
    console.log(`Servidor funcionando en puerto: ${port}`)
})