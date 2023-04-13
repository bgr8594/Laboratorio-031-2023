import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './service/auth-guard.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'presupuesto',
    loadChildren: () => import('./presupuesto/presupuesto.module').then( m => m.PresupuestoPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'receptor',
    loadChildren: () => import('./receptor/receptor.module').then( m => m.ReceptorPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'detalle-receta',
    loadChildren: () => import('./detalle-receta/detalle-receta.module').then( m => m.DetalleRecetaPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'receta',
    loadChildren: () => import('./receta/receta.module').then( m => m.RecetaPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'destinos',
    loadChildren: () => import('./destinos/destinos.module').then( m => m.DestinosPageModule),
    canActivate: [AuthGuardGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
