import { AlumnoDTO } from './dto/alumnos.dto'

export class Alumno {
  private readonly nombre: string
  private readonly edad: number

  constructor (data: AlumnoDTO) {
    this.nombre = data.nombre
    this.edad = data.edad
  }

  imprimirDatos (): string {
    return `Nombre: ${this.nombre}, Edad: ${this.edad}`
  }

  verificarMayorEdad (): string {
    return this.edad >= 18
      ? `${this.nombre} es mayor de edad.`
      : `${this.nombre} es menor de edad.`
  }
}
