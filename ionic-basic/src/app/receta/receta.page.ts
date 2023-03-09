import { Component, OnInit } from '@angular/core';
import { RecetaService } from '../service/receta.service';
import { Receta } from '../interface/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  recetas: Receta[] = [] ;

  constructor(private recetaService: RecetaService) { }

  ngOnInit() {
    this.recetas = this.recetaService.getRecetas();
  }

}
