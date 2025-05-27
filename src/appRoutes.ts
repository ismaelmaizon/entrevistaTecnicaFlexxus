import { Router } from 'express'
import numerosImpares from './1_numerosImpares/numerosImpares' // Importing the router for odd numbers
import sueldos from './2_sueldos/sueldos.routers'
import alumnos from './3_Alumnos/alumnos.routes'
import array from './4_JavaScriptES6/array'
import articulos from './6_ApiArticulos/artuculos.routes'
import { verificarTokenSimple } from './verificarToken'

const appRoutes = Router()

appRoutes.use('/numerosImpares', numerosImpares) // Route for odd numbers
appRoutes.use('/sueldos', sueldos) // Route for salaries
appRoutes.use('/alumnos', alumnos) // Route for alumnos
appRoutes.use('/array', array) // Route for arrays
appRoutes.use('/articulos', verificarTokenSimple, articulos) // Route for articulos

export default appRoutes
