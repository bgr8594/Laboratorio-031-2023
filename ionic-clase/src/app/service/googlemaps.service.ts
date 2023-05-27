import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var google: any;
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class GooglemapsService {

  apikey: string = environment.apiKeyMaps;
  mapsloaded: boolean = false;

  constructor() { }

  init(renderer: any, document: any): Promise<boolean> {

    return new Promise((resolve, reject) => {
      if (this.mapsloaded) {
        console.log('Google Maps is already loaded.');
        resolve(true);
        return;
      }

      const script = renderer.createElement('script');
      script.id = "googleMaps";

      window.mapInit = () => {
        this.mapsloaded = true;
        if (google) {
          console.log('Google Maps is loaded.');
        } else {
          console.log('Google Maps is not defined.');
        }

        resolve(true);
        return;
      };

      if (this.apikey) {
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apikey + '&callback=mapInit';
      } else {
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
      }
      renderer.appendChild(document.body, script);
    });
  }
}
