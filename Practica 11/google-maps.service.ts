import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private apiKey: string = 'TU_CLAVE_DE_API';

  constructor() {
    this.loadGoogleMapsScript();
  }

  private loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
}
