import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Calificacion } from '../interface/calificacion'

@Component({
  selector: 'app-datos-calificacion',
  templateUrl: './datos-calificacion.component.html',
  styleUrls: ['./datos-calificacion.component.scss'],
})
export class DatosCalificacionComponent implements OnInit {

  @Input() calificacionesList:Calificacion[] =[];
  @Output() eliminar: any = new EventEmitter<Calificacion[]>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}