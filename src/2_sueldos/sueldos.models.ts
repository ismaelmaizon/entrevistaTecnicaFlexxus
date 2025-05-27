// src/models/Sueldos.ts
import { OperarioDTO } from './dto/sueldos.dto'

export class Sueldos {
  private readonly operarios: OperarioDTO[]

  constructor (operarios: OperarioDTO[]) {
    if (operarios.length !== 5) {
      throw new Error('Se deben ingresar exactamente 5 operarios')
    }
    this.operarios = operarios
  }

  imprimir (): string[] {
    return this.operarios.map((op) => `${op.nombre}: $${op.sueldo}`)
  }
}
