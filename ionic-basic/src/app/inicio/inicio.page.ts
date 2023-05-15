import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from '../interface/personaje';
import { EnvioReceptorService } from '../services/envio-receptor.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user: Personaje = {name:'Pedro Perez', uuid:"34523452345234523452345", email:"correo@gmail.com"};

  list: Personaje[]=
  [
    {name:'luis perez', uuid:"42342342343243242343245", email:"luis@gmail.com"},
    {name:'alejandro mp', uuid:"45634234657686545342323", email:"ale@gmail.com"},
    {name:'Pedro gignac', uuid:"98796654332478787889985", email:"gignac@gmail.com"}
  ];

  constructor(
    private router: Router,
    private envioReceptor: EnvioReceptorService) { }

  ngOnInit() {
  }

  gotReceiver(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list);

    this.router.navigate(['/main/receptor']);
  }

}
