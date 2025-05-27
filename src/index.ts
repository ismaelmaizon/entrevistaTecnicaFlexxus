import express from 'express'
import rutas from './appRoutes'
import dotenv from 'dotenv'
// documentacion de la API
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swagger'

const app = express()
dotenv.config()
app.use(express.json()) // middleware to parse JSON bodies
// swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const PORT = process.env.PORT !== undefined ? parseInt(process.env.PORT, 10) : 3000

app.use('/api', rutas)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
