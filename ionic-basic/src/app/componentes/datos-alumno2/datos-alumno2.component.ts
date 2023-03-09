import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/interface/alumno';

@Component({
  selector: 'app-datos-alumno2',
  templateUrl: './datos-alumno2.component.html',
  styleUrls: ['./datos-alumno2.component.scss'],
})
export class DatosAlumno2Component implements OnInit {

  @Input() alumnosList:Alumno[] =[];
  @Output() eliminar: any = new EventEmitter<Alumno[]>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}
