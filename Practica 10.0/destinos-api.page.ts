import { Component } from '@angular/core';
import { ApiService } from 'ruta/al/api.service';

@Component({
  selector: 'app-destinos-api',
  templateUrl: './destinos-api.page.html',
  styleUrls: ['./destinos-api.page.css']
})
export class DestinosApiPage {
  coordenadas: Coordinates | null = null;

  constructor(private apiService: ApiService) {}

  obtenerGeolocalizacion() {
    this.apiService.obtenerGeolocalizacion().subscribe((coords) => {
      this.coordenadas = coords;
    });
  }
}
