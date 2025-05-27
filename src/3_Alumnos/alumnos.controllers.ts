import { Request, Response } from 'express'
import { Alumno } from './alumnos.model'
import { AlumnoDTO } from './dto/alumnos.dto'

// instancia de la clase Alumnos
let alumno: Alumno

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const cargarAlumno = (req: Request, res: Response) => {
  const { nombre, edad }: AlumnoDTO = req.body

  if (typeof nombre !== 'string' || typeof edad !== 'number') {
    res.status(400).json({ mensaje: 'Datos inválidos' })
  }

  alumno = new Alumno({ nombre, edad })
  console.log(alumno)
  res.status(201).json({
    mensaje: 'Alumno cargado correctamente',
    datos: alumno.imprimirDatos(),
    mayorEdad: alumno.verificarMayorEdad()
  })
}
