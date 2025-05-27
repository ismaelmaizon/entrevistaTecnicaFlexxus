import { ArticuloDTO } from '../dto/artuculos.dto'

export interface ArticuloNuevo {
  nombre: string
  marca: string
  activo?: boolean
  fechaModificacion?: string
}

export type ArticuloUpdate = Partial<Omit<ArticuloDTO, 'id'>>
