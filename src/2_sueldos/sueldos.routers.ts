// src/routes/sueldos.routes.ts
import { Router } from 'express'
import { cargarSueldos, listarSueldos } from './sueldos.controllers'

const router = Router()

// cargarSueldos
router.post('/insertSueldos', cargarSueldos)
// ver vercor de sueldos
router.get('/verSueldos', listarSueldos)

export default router
