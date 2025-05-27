import { create, getAll, getById, remove, update } from './articulos.model'
import { ArticuloDTO } from './dto/artuculos.dto'
import { ArticuloNuevo, ArticuloUpdate } from './types/types'
// import { ArticuloDTO } from './dto/artuculos.dto'

export const listarArticulos = async (): Promise<ArticuloDTO[]> => await getAll()

export const obtenerArticulo = async (id: number): Promise<ArticuloDTO | null> => await getById(id)

export const crearArticulo = async (data: ArticuloNuevo): Promise<{ id: number }> => {
  if (data.fechaModificacion === undefined) {
    data.fechaModificacion = new Date().toISOString().slice(0, 19).replace('T', ' ')
  }
  console.log(data)
  return await create(data)
}

export const actualizarArticulo = async (id: number, datosParciales: Partial<ArticuloUpdate>): Promise<'noExiste' | 'sinCambios' | 'actualizado'> => {
  const original = await getById(id)
  if (original === null) return 'noExiste'

  const actualizado: ArticuloUpdate = {
    ...original, // copia todos los campos del objeto original.
    ...datosParciales, // sobreescribe con los campos que vinieron en la solicitud.
    fechaModificacion: new Date().toISOString().slice(0, 19).replace('T', ' ') // siempre se actualiza la fecha
  }

  // Comparar original vs actualizado
  const sinCambios = Object.entries(actualizado)
    .filter(([key]) => key !== 'fechaModificacion') // excluye esta propiedad
    .every(([key, val]) => (original as any)[key] === val
    )

  if (sinCambios) return 'sinCambios'

  await update(id, actualizado)
  return 'actualizado'
}

export const eliminarArticulo = async (id: number): Promise<void> => {
  const articulo = await getById(id)
  if (articulo === null) {
    const error = new Error('Artículo no encontrado') as any
    error.status = 404
    throw error
  }

  if (!articulo.activo) {
    const error = new Error('El artículo ya está desactivado') as any
    error.status = 400
    throw error
  }

  await remove(id)
}
