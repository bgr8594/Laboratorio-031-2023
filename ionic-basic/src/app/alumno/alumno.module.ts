import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnoPageRoutingModule } from './alumno-routing.module';

import { AlumnosPage } from './alumno.page';

import { DatosAlumnoComponent } from '../componentes/datos-alumno/datos-alumno.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnoPageRoutingModule
  ],
  declarations: [AlumnosPage, DatosAlumnoComponent]
})
export class AlumnoPageModule {}
