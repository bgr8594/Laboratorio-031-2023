import { Component, OnInit } from '@angular/core';
import { Calificacion } from '../interface/calificacion'
import { CalificacionService } from '../service/calificacion.service';

@Component({
    selector: 'app-calificaciones',
    templateUrl: './calificaciones.page.html',
    styleUrls: ['./calificaciones.page.scss'],
  })
export class CalificacionesPage implements OnInit {

  calificaciones:Calificacion[]=[];
  materia: string ='';
  calificacions: string = '';
  public aprobatorio: string[]=['Aprobado', 'Reprobado'];
  estado: string = '';
  public selectedValue: any;
  idActualizar: any|number = 0;
  error: boolean = false;

  constructor(private calificacionService: CalificacionService) { }

  ngOnInit() {
    this.calificacionService.setCalificaciones([
      {id:1, materia: 'Matematicas',
      calificacions: '4',
      aprobatorio: 'Reprobado'},
      {id:2, materia: 'Español',
      calificacions: '7',
      aprobatorio: 'Aprobado'},
      {id:3, materia: 'Ingles',
      calificacions: '10',
      aprobatorio: 'Aprobado'}
    ]);

    this.calificaciones = this.calificacionService.getCalificaciones();
    this.estado ='Dar de alta';

  }

  cambioValor(value: any){
    console.log(value);
  }
  public guardar(){
    if( (this.materia == undefined || this.materia == '' ) || 
      (this.calificacions == undefined || this.calificacions == '') ||
      (this.selectedValue == undefined || this.selectedValue == null)) {
      this.error = true;
      return;
    }  
    let calificacion: Calificacion={
      materia: this.materia,
      calificacions: this.calificacions,
      aprobatorio: this.selectedValue
    };
    if (this.estado ==='actualizar'){
      calificacion.id = this.idActualizar;
      this.calificaciones = this.calificacionService.actualiza(calificacion);
    }
    if(this.estado === 'Dar de alta'){
      this.calificacionService.agregarCalificacion(calificacion);
      this.calificaciones = this.calificacionService.getCalificaciones();
    }
    this.cancelar();
  }

  public cancelar(){
    this.estado = 'Dar de alta';
    this.calificacions = '';
    this.materia = '';
    this.selectedValue = '';
    this.error = false;
  }

  public eliminar(id:number){
    this.calificacionService.borrarCalificacion(id);
    this.calificaciones = this.calificacionService.getCalificaciones();
  }

  public editar(calificacion:Calificacion){
    this.estado = 'actualizar';
    this.calificacions = calificacion.calificacions;
    this.materia = calificacion.materia;
    this.selectedValue = this.selectedValue;
    this.idActualizar = calificacion.id;
  }

}