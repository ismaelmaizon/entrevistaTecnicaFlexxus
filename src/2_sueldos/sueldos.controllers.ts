// src/controllers/sueldos.controller.ts
import { Request, Response } from 'express'
import { Sueldos } from './sueldos.models'
import { SueldoDTO } from './dto/sueldos.dto'

// instancia de la clase Sueldos
let sueldos: Sueldos

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const cargarSueldos = (req: Request, res: Response) => {
  const { operarios }: SueldoDTO = req.body
  console.log(operarios)

  for (const op of operarios) {
    if (typeof op.nombre !== 'string' || typeof op.sueldo !== 'number') {
      res.status(400).json({ error: 'Nombre debe ser string y sueldo debe ser number' })
    }
  }

  try {
    sueldos = new Sueldos(operarios)
    res.status(201).json({ mensaje: 'Sueldos cargados correctamente' })
  } catch (err: any) {
    res.status(400).json({ error: err.message })
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const listarSueldos = (_req: Request, res: Response) => {
  if (sueldos == null) res.status(404).json({ error: 'No hay sueldos cargados' })
  res.json(sueldos.imprimir())
}
