import { Injectable } from '@angular/core';
import { calificacion } from '../interface/calificacion'
@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  private calificaciones: calificacion[]= [];

  constructor() { }

  public agregarEvaluacion(calificacion: calificacion){
    if(this.calificaciones.length>0){
      calificacion.id = this.calificaciones.length + 1 ;
    } else {
      calificacion.id = 1;
    }
    this.calificaciones.push(calificacion);
  }

  public borrarEvaluacion(id: number){
    this.calificaciones =
    this.calificaciones.filter((al=>al.id!=id));
  }

  public getEvaluacion(): calificacion[]{
    return this.calificaciones;
  }

  public setEvaluacion(calificaciones: calificacion[]){
    this.calificaciones = calificaciones;
  }

  public actualiza(calificacion: calificacion): calificacion[]{
    this.calificaciones.filter(
      (al)=>al.id==calificacion.id
    ).map(al=>{
      al.matricula=calificacion.matricula;
      al.materia=calificacion.materia;
      al.Promedio=calificacion.Promedio;
      al.nombre = calificacion.nombre;
    });
    return this.calificaciones;
  }
}