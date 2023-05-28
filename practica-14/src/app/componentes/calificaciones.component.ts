import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { calificacion } from '../interface/calificacion'

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.scss'],
})
export class CalificacionComponent implements OnInit {

  @Input() calificacion:calificacion[] =[];
  @Output() eliminar: any = new EventEmitter<calificacion[]>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}
