import { Injectable } from '@angular/core';
import { Calificacion } from '../calificaciones/calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  calificaciones: Calificacion[] = [];

  constructor() {
    // Calificaciones pre cargadas
    this.calificaciones.push({
      materia: 'Matemáticas',
      calificacion: 90,
      aprobado: true
    });
    this.calificaciones.push({
      materia: 'Historia',
      calificacion: 75,
      aprobado: true
    });
  }

  alta(calificacion: Calificacion) {
    this.calificaciones.push(calificacion);
  }

  baja(index: number) {
    this.calificaciones.splice(index, 1);
  }

  cambios(index: number, calificacion: Calificacion) {
    this.calificaciones[index] = calificacion;
  }

  buscarCalificaciones() {
    return this.calificaciones;
  }
}
