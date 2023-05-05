import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from '../interface/personaje';
import { EnvioReceptorService } from '../service/envio-receptor.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  user: Personaje = {name: 'Mario Bernal', uuid: "123456789", email: "correo@gmail.com"}

  list: Personaje[] = [
    {name: 'Mario Bernal', uuid: "123456789", email: "correo@gmail.com"},
    {name: 'Mario Bernal', uuid: "123456789", email: "correo@gmail.com"},
    {name: 'Mario Bernal', uuid: "123456789", email: "correo@gmail.com"}
  ]

  constructor( private router: Router, private envioReceptor: EnvioReceptorService ) { 
    
  }

  ngOnInit() {
  }

  gotReceiver(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list)
    this.router.navigate(['/main/receptor']);
  }
  
}
