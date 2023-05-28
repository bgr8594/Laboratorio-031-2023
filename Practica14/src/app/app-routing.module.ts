import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calificaciones',
    pathMatch: 'full'
  },
  {
    path: 'calificaciones',
    loadChildren: () => import('./calificaciones/calificaciones.module').then(m => m.CalificacionesPageModule)
  },
];

@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }