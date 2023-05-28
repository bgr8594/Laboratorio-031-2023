import { Component, OnInit } from '@angular/core';
import { calificacion } from '../interface/calificacion'
import { CalificacionService } from '../Service/calificacion.service';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.page.html',
  styleUrls: ['./calificaciones.page.scss'],
})
export class PaginaCal implements OnInit {

  calificaciones:calificacion[]=[];
  matricula: string ='';
  nombre: string = '';
  Promedio: string = '';
  materia: string = '';
  estado: string = '';
  idActualizar: any|number = 0;
  error: boolean = false;

  constructor(private calificacionservice: CalificacionService) { }

  ngOnInit() {
    this.calificacionservice.setEvaluacion([
      {id:1, matricula: 'Guadalupe Esparza',
      nombre: '1882636', Promedio:'70', materia: 'Algebra Lineal'},
      {id:2, matricula: 'Susana Altamirano',
      nombre: '1382531', Promedio:'100', materia: 'Calculo vectorial'},
      {id:3, matricula: 'Señor chucho',
      nombre: '2093463', Promedio:'95', materia: 'Psicologia'},
      {id:4, matricula: 'Javier Jose Hernandez',
      nombre: '2039405', Promedio:'43', materia: 'Ecuaciones Diferenciales'},
    ]);

    this.calificaciones = this.calificacionservice.getEvaluacion();
    this.estado ='Guardar';

  }
  public guardar(){
    if( (this.nombre == undefined || this.nombre == '' ) || 
      (this.matricula == undefined || this.matricula == '' ) ||
      (this.materia == undefined || this.materia == '' )||
      (this.Promedio == undefined || this.Promedio == '' )){
      this.error = true;
      return;
    }  
    let calificacion: calificacion={
      nombre: this.nombre,
      matricula: this.matricula,
      Promedio: this.Promedio,
      materia: this.materia
    };
    if (this.estado ==='actualizar'){
      calificacion.id = this.idActualizar;
      this.calificaciones = this.calificacionservice.actualiza(calificacion);
    }
    if(this.estado === 'guardar'){
      this.calificacionservice.agregarEvaluacion(calificacion);
      this.calificaciones = this.calificacionservice.getEvaluacion();
    }
    this.cancelar();
  }

  public cancelar(){
    this.estado = 'guardar';
    this.matricula = '';
    this.nombre = '';
    this.materia = '';
    this.Promedio = '';
    this.error = false;
  }

  public eliminar(id:number){
    this.calificacionservice.borrarEvaluacion(id);
    this.calificaciones = this.calificacionservice.getEvaluacion();
  }

  public editar(calificacion:calificacion){
    this.estado = 'actualizar';
    this.matricula = calificacion.matricula;
    this.nombre = calificacion.nombre;
    this.materia = calificacion.materia;
    this.Promedio = calificacion.Promedio;
    this.idActualizar = calificacion.id;
  }

}