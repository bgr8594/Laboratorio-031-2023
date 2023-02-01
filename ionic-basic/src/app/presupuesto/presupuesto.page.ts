import { Component, OnInit } from '@angular/core';
import { Gasto } from '../interface/gasto';
import { GastosService } from '../service/gastos.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
