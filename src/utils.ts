import { ArticuloNuevo, ArticuloUpdate } from './6_ApiArticulos/types/types'

const isString = (value: any): value is string => typeof value === 'string'
const isBoolean = (value: any): value is boolean => typeof value === 'boolean'
// const isValidDate = (value: any): boolean => isString(value) && !isNaN(Date.parse(value))

export const toNewArticulo = (object: any): ArticuloNuevo => {
  if (object === null || typeof object !== 'object') {
    throw new Error('El objeto recibido no es válido')
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { nombre, marca, activo } = object

  if (!('nombre' in object)) throw new Error('El campo "nombre" es requerido')
  if (!isString(object.nombre)) throw new Error('El campo "nombre" debe ser un string')

  if (!('marca' in object)) throw new Error('El campo "marca" es requerido')
  if (!isString(object.marca)) throw new Error('El campo "marca" debe ser un string')

  // Objeto base
  const nuevo: ArticuloNuevo = {
    nombre: nombre.trim(),
    marca: marca.trim(),
    activo: isBoolean(activo) ? activo : true
  }

  // Validar y procesar fechaModificacion si vino
  if ('fechaModificacion' in object) {
    if (!isString(object.fechaModificacion)) {
      throw new Error('fechaModificacion debe ser un string')
    }

    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(.\d{3})?Z?$/
    if (!isoRegex.test(object.fechaModificacion)) {
      throw new Error('fechaModificacion tiene un formato inválido')
    }

    const fechaConvertida = object.fechaModificacion.slice(0, 19).replace('T', ' ')
    nuevo.fechaModificacion = fechaConvertida
  } else {
    // Si no vino, se asigna automáticamente la actual
    nuevo.fechaModificacion = new Date().toISOString().slice(0, 19).replace('T', ' ')
  }

  return nuevo
}

export const toPartialArticulo = (object: any): ArticuloUpdate => {
  const camposValidos: ArticuloUpdate = {}
  // ver como llega la información
  console.log('object:', object)

  if ('nombre' in object) {
    if (!isString(object.nombre)) throw new Error('Nombre inválido')
    camposValidos.nombre = object.nombre
  }

  if ('marca' in object) {
    if (!isString(object.marca)) throw new Error('Marca inválida')
    camposValidos.marca = object.marca
  }

  if ('activo' in object) {
    if (typeof object.activo !== 'boolean') throw new Error('Activo debe ser booleano')
    camposValidos.activo = object.activo
  }

  if ('fechaModificacion' in object) {
    if (!isString(object.fechaModificacion)) throw new Error('fechaModificacion debe ser un string')

    // Validar formato ISO básico (opcional pero recomendable)
    const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/
    if (!isoRegex.test(object.fechaModificacion)) {
      throw new Error('fechaModificacion tiene un formato inválido')
    }

    // Convertir al formato compatible con MySQL DATETIME
    const fechaConvertida = object.fechaModificacion.slice(0, 19).replace('T', ' ')
    camposValidos.fechaModificacion = fechaConvertida
  }

  return camposValidos
}
