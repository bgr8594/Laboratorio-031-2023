import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalificacionesPageRoutingModule } from './calificaciones-routing.module';

import { CalificacionesPage } from './calificaciones.page';
import { DatosCalificacionComponent } from '../componentes/datos-calificacion.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalificacionesPageRoutingModule
  ],
  declarations: [CalificacionesPage, DatosCalificacionComponent]
})
export class CalificacionesPageModule {}