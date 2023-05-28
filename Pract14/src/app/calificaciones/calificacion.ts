export class Calificacion {
    materia: string;
    calificacion: number;
    aprobado: boolean;
  
    constructor(materia: string, calificacion: number, aprobado: boolean) {
      this.materia = materia;
      this.calificacion = calificacion;
      this.aprobado = aprobado;
    }
  }
  