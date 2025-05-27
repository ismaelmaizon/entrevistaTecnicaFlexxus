// src/routes/sueldos.routes.ts
import { Router } from 'express'
import { cargarAlumno } from './alumnos.controllers'

const router = Router()

// cargarAlumno
router.post('/insertAlumno', cargarAlumno)

export default router
