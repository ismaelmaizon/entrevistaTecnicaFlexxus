// src/dtos/sueldo.dto.ts
export interface OperarioDTO {
  nombre: string
  sueldo: number
}

export interface SueldoDTO {
  operarios: OperarioDTO[]
}
