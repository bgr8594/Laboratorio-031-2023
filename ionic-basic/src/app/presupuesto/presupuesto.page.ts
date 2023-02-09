import { Component, OnInit } from '@angular/core';
import { Gasto } from '../interface/gasto';
import { GastoService } from '../service/gasto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
  styleUrls: ['./presupuesto.page.scss'],
})
export class PresupuestoPage implements OnInit {

  public gastos: string[] = ['Directos', 'Fijos','Variables'];
  public selectedValue: any;
  public monto: number = 0;
  public results: string ='';
  public erResults: string ='light';
  public descripcion: string ='';
  public tipoGasto: string ='';
  public gastosList: Gasto[]=[];
  constructor(private GastoService: GastoService) { }

  ngOnInit() {
  }

  customPopoverOptions: any = {
    header: 'Seleccion de gastos',
    subHeader: 'Seleccione el tipo de gasto',
    message: 'Solo seleccione un tipo de gasto'
  };

  changeValue(value: any){
    console.log(value);
  }

  guardar(){
    this.results ='';
    if (this.monto!= null && this.selectedValue!= null && this.descripcion!= null && this.monto > 0 && this.descripcion!= '') {
      this.erResults = 'success';
      this.results = 'Gasto seleccionado: '+this.selectedValue+'\nMonto: '+this.monto+'\n'+'Descripcion: '+this.descripcion;
      let gasto: Gasto = {
        descripcion: this.descripcion,
        tipo: this.selectedValue,
        monto: this.monto
      }
        this.GastoService.agregar(gasto);
        this.gastosList = this.GastoService.getGastos();
    } else {
      this.erResults ='danger';
      this.results ="No a completado los campos del formulario";
    }
  }

  borrarGasto(gasto: Gasto){
    this.GastoService.borrarGasto(gasto);
    this.gastosList = this.GastoService.getGastos();
  }
}
