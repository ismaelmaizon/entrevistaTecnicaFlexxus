import { db } from '../../database/mysql'
import { ResultSetHeader } from 'mysql2'
import { ArticuloDTO } from './dto/artuculos.dto'
import { ArticuloNuevo, ArticuloUpdate } from './types/types'

export const getAll = async (): Promise<ArticuloDTO[]> => {
  const [rows] = await db.query('SELECT * FROM articulos')
  return rows as ArticuloDTO[]
}

export const getById = async (id: number): Promise<ArticuloDTO | null> => {
  const [rows] = await db.query('SELECT * FROM articulos WHERE id = ?', [id])
  const result = rows as ArticuloDTO[]
  return result.length > 0 ? result[0] : null
}

export const create = async (articulo: ArticuloNuevo): Promise<{ id: number }> => {
  const [result] = await db.query<ResultSetHeader>(
    'INSERT INTO articulos (nombre, fechaModificacion, marca, activo) VALUES (?, ?, ?, ?)',
    [articulo.nombre, articulo.fechaModificacion, articulo.marca, articulo.activo]
  )
  return { id: result.insertId }
}

export const update = async (id: number, data: ArticuloUpdate): Promise<void> => {
  const { nombre, marca, activo, fechaModificacion } = data
  await db.query(
    'UPDATE articulos SET nombre = ?, marca = ?, activo = ?, fechaModificacion = ? WHERE id = ?',
    [nombre, marca, activo, fechaModificacion, id]
  )
}

export const remove = async (id: number): Promise<void> => {
  const fechaActual = new Date().toISOString().slice(0, 19).replace('T', ' ')
  await db.query('UPDATE articulos SET activo = ?, fechaModificacion = ? WHERE id = ?', [false, fechaActual, id])
}
