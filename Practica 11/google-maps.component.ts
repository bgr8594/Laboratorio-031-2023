import { Component, OnInit } from '@angular/core';
import { GoogleMapsService } from 'ruta/al/google-maps.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {
  map: google.maps.Map | undefined;

  constructor(private googleMapsService: GoogleMapsService) {}

  ngOnInit() {
    this.googleMapsService.loadGoogleMapsScript();
    this.initializeMap();
  }

  private initializeMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 8,
    };

    this.map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      mapOptions
    );
  }
}
