import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../alumno.interface';

@Component({
  selector: 'app-datos-alumno',
  templateUrl: './datos-alumno.component.html',
  styleUrls: ['./datos-alumno.component.css']
})
export class DatosAlumnoComponent {
  @Input() alumno: Alumno;
  @Output() save = new EventEmitter<Alumno>();
  @Output() cancel = new EventEmitter<void>();

  onSave(): void {
    this.save.emit(this.alumno);
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
