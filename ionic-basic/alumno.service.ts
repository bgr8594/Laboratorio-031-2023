import { Injectable } from '@angular/core';
import { Alumno } from './alumno.interface';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private alumnos: Alumno[] = [
    { id: 1, nombre: 'Rafael', apellido: 'Cornelio', edad: 21, carrera: 'LCC' },
    { id: 2, nombre: 'Leonardo', apellido: 'Cornelio', edad: 17, carrera: 'Relaciones internacionales' },
    { id: 3, nombre: 'David', apellido: 'Cirlos', edad: 22, carrera: 'Ingenieria' },
  ];

  getAlumnos(): Alumno[] {
    return this.alumnos;
  }

  getAlumno(id: number): Alumno {
    return this.alumnos.find(alumno => alumno.id === id);
  }

  addAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  updateAlumno(alumno: Alumno): void {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index >= 0) {
      this.alumnos[index] = alumno;
    }
  }

  deleteAlumno(id: number): void {
    const index = this.alumnos.findIndex(a => a.id === id);
    if (index >= 0) {
      this.alumnos.splice(index, 1);
    }
  }
}
