import { Injectable } from '@angular/core';
import { Gasto } from 'C:/Users/diego/OneDrive/Documentos/GitHub/Laboratorio-031-2023/Ionic-basic/src/app/Gasto';

@Injectable({
  providedIn: 'root'
})
// Servicio de gastos para operaciones alta, baja, cambios
export class GastoService {

  gastos: Gasto[]=[];

  constructor() { }

  agregar(gasto: Gasto){
    if(this.gastos.length==0){
      gasto.id = 1;
    } else{
      gasto.id = this.gastos.length + 1;
    }
    this.gastos.push(gasto);
  }

  borrarGasto(gasto: Gasto){
    this.gastos = 
    tthis.gastos.filter((g)=>g.id!= (gasto.id!=null?gasto.id:0));
  }

  getGastos(){
    return this.gastos;
  }
}
