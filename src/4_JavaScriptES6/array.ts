// src/routes/sueldos.routes.ts
import { Router } from 'express'

const router = Router()

const x = ['n', 'bro', 'c', '|']
const y = ['d', 'n', 'l', 'bro', 'g']

// cargarAlumno
router.get('/', (_req, res) => {
  console.log(y.filter(el => !x.includes(el)))
  res.status(200).json({ message: 'se muestra por consola' })
})

export default router
