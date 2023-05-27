import { Router } from '@angular/router';
import { Menu } from './../interface/menu';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { MenuServiceService } from '../service/menu-service.service';
import { onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
  styleUrls: ['./float-menu.component.scss'],
})
export class FloatMenuComponent implements OnInit, OnDestroy {

  datosMenu: Menu[] =[
   /* {nombre: 'home',enlace:'/home',
    icono:'home-outline'},
    {nombre: 'Alumnos',enlace:'/alumnos',
  icono:'school-outline'},
    {nombre: 'Receteas',enlace:'/receta',
    icono:'restaurant-outline'},
    {nombre: 'Presupuesto',enlace:'/presupuesto',
    icono:'cash-outline'},
    {nombre: 'inicio',enlace:'/inicio',
    icono:'navigate-outline'},
    {nombre: 'Tabs',enlace:'/tabs',
    icono:'folder-outline'},*/ /*FIREBASE */
    {nombre: 'login',enlace:'/login',
    icono:'log-in-outline'},
    {nombre: 'logout',enlace:'/home',
    icono:'log-out-outline'}
  ];

  titleMenu: string='home';

   public isLoged : any = false;

   public subscription : Subscription = new Subscription();

  constructor(private authService: AuthService, private menuService: MenuServiceService,private router: Router) { 
    onAuthStateChanged(this.authService.getStateAuth(), user => {
      if (user!=null && user!=undefined) {
        this.isLoged = true;
      }
    });
    this.subscription = this.menuService.$getTitleMenu.subscribe(
      data=>{
        console.log(data);
        this.titleMenu =data;
      }
  );
  }

  ngOnInit() {}

  navegar(link: string, titleMenu: string){
    this.titleMenu = titleMenu;
    this.router.navigate([link]);
  }

  ngOnDestroy(): void {
    if (this.subscription !=null || this.subscription!=undefined) {
      this.subscription.unsubscribe();
    }
  }

  onMenuOpen(){
    onAuthStateChanged(this.authService.getStateAuth(), user=>{
      if(user!=null && user != undefined){
        this.datosMenu =[
          {nombre: 'Alumnos',enlace:'/main/alumnos',
    icono:'school-outline'},
      {nombre: 'Receteas',enlace:'/main/receta',
      icono:'restaurant-outline'},
      {nombre: 'Presupuesto',enlace:'/main/presupuesto',
      icono:'cash-outline'},
      {nombre: 'inicio',enlace:'/main/inicio',
      icono:'navigate-outline'},
      {nombre: 'Turismo',enlace:'/main/destinos',
      icono:'airplane'},
      {nombre: 'Turismo-api',enlace:'main/destinos-api',
      icono:'airplane'},
      {nombre: 'Tabs',enlace:'/main/tabs',
      icono:'folder-outline'},
      {nombre: 'segmen-button',enlace:'/main/segment-button',
           icono:'bookmarks-outline'},
          {nombre: 'logout',enlace:'/home',
          icono:'log-out-outline'}
        ];

      }
     else{
        this.datosMenu =[
          {nombre: 'login',enlace:'/login',
          icono:'log-in-outline'}
        ];
      }
    });
  }

}
