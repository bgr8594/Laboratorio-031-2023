import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
  path: '',
  component: TabsPage,
  children:[
    {
      path:'alumno',
      loadChildren : () => import('../alumno/alumno.module').then(m=>m.AlumnoPageModule)
    }
    ,
    {
      path: 'recetas',
      loadChildren: () => import('../receta/receta.module').then(m=>m.RecetaPageModule)
    },
    {
      path: 'galeria',
      loadChildren: () => import('../galeria/galeria.module').then(m=>m.GaleriaPageModule)
    },
    {
      path:'',
      redirectTo: '/main/tabs/alumno',
      pathMatch: 'full'
    }
  ]
},
{
  path: '',
  redirectTo: '/main/tabs/alumno',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}