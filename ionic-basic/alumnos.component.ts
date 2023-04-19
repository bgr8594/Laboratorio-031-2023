import { Component } from '@angular/core';
import { Alumno } from '../alumno.interface';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  alumnos: Alumno[];
  selectedAlumno: Alumno;

  constructor(private alumnoService: AlumnoService) {
    this.alumnos = alumnoService.getAlumnos();
  }

  onAddAlumno(): void {
    const id = this.alumnos.length + 1;
    const alumno: Alumno = { id, nombre: '', apellido: '', edad: null, carrera: '' };
    this.selectedAlumno = alumno;
  }

  onEditAlumno(alumno: Alumno): void
