import { ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Calificacion } from '../calificaciones/calificacion';
import { CalificacionesService } from '../services/calificaciones.service';

export class CalificacionesPage {
  calificacionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private calificacionesService: CalificacionesService,
    private toastController: ToastController
  ) {
    this.calificacionForm = this.formBuilder.group({
      materia: ['', Validators.required],
      calificacion: ['', Validators.required],
      aprobado: [false, Validators.required]
    });
  }

  agregarCalificacion() {
    const nuevaCalificacion: Calificacion = {
      materia: this.calificacionForm.value.materia,
      calificacion: this.calificacionForm.value.calificacion,
      aprobado: this.calificacionForm.value.aprobado
    };

    this.calificacionesService.alta(nuevaCalificacion);
    this.mostrarMensaje('Calificación agregada');
    this.calificacionForm.reset();
  }

  editarCalificacion(index: number) {
    const calificacion = this.calificacionesService.calificaciones[index];

    this.calificacionForm.setValue({
      materia: calificacion.materia,
      calificacion: calificacion.calificacion,
      aprobado: calificacion.aprobado
    });
  }

  guardarEdicion(index: number) {
    const calificacion = this.calificacionesService.calificaciones[index];

    if (this.calificacionForm.valid) {
      calificacion.materia = this.calificacionForm.value.materia;
      calificacion.calificacion = this.calificacionForm.value.calificacion;
      calificacion.aprobado = this.calificacionForm.value.aprobado;

      this.mostrarMensaje('Calificación actualizada');
      this.calificacionForm.reset();
    } else {
      this.mostrarMensaje('Por favor, complete los campos requeridos');
    }
  }

  borrarCalificacion(index: number) {
    this.calificacionesService.baja(index);
    this.mostrarMensaje('Calificación eliminada');
  }

  async mostrarMensaje(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
