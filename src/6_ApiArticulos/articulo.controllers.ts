import { Request, Response } from 'express'
import * as articulosServices from './articulos.services'
// import { crearArticulo, listarArticulos, obtenerArticulo } from './articulos.services'

import { toNewArticulo, toPartialArticulo } from '../utils'

export const listar = async (_req: Request, res: Response): Promise<void> => {
  try {
    const articulos = await articulosServices.listarArticulos()
    res.json(articulos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ mensaje: 'Error al obtener artículos' })
  }
}

export const obtener = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id)
  console.log(id)
  const articulo = await articulosServices.obtenerArticulo(id)
  if (articulo === undefined) res.status(404).json({ mensaje: 'No encontrado' })
  res.json(articulo)
}

export const crear = async (req: Request, res: Response): Promise<void> => {
  try {
    const nuevoArticulo = toNewArticulo(req.body)
    const result = await articulosServices.crearArticulo(nuevoArticulo)
    console.log(result)
    res.status(200).json({ mensaje: 'Artículo creado', id: result.id })
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: (error as Error).message })
  }
}

export const actualizar = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id)
  console.log(req.body)
  try {
    const datosValidados = toPartialArticulo(req.body)
    console.log('Datos validados:', datosValidados)

    if (Object.keys(datosValidados).length === 0) {
      res.status(400).json({ mensaje: 'No hay campos válidos para actualizar' })
    }

    const estado = await articulosServices.actualizarArticulo(id, datosValidados)

    // Verificar el estado de la actualización
    if (estado === 'noExiste') {
      res.status(404).json({ mensaje: ' el artículo no existía.' })
    } else if (estado === 'sinCambios') {
      res.status(200).json({ mensaje: 'No se realizaron cambios en el artículo.' })
    } else {
      res.json({ mensaje: 'Artículo actualizado' })
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ mensaje: (error as Error).message })
  }
}

export const eliminar = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).json({ mensaje: 'ID inválido' })
  }
  try {
    await articulosServices.eliminarArticulo(id)
    res.status(200).json({ mensaje: 'Artículo desactivado correctamente' })
  } catch (error: any) {
    console.error(error)
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    res.status(error.status || 500).json({ error: error.message || 'Error inesperado' })
  }
}
