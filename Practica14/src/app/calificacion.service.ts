import { Injectable } from '@angular/core';
import { Calificacion } from './calificacion';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {
  private calificaciones: Calificacion[] = [];

  constructor() { }

  alta(calificacion: Calificacion): void {
    this.calificaciones.push(calificacion);
  }

  baja(index: number): void {
    this.calificaciones.splice(index, 1);
  }

  cambios(index: number, nuevaCalificacion: Calificacion): void {
    this.calificaciones[index] = nuevaCalificacion;
  }

  buscar(): Calificacion[] {
    return this.calificaciones;
  }
}