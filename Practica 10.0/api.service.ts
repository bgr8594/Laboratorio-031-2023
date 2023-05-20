import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  obtenerGeolocalizacion(): Observable<Coordinates> {
    return new Observable((observer) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position.coords);
            observer.complete();
          },
          (error) => {
            observer.error(error);
            observer.complete();
          }
        );
      } else {
        observer.error('Geolocalización no soportada');
        observer.complete();
      }
    });
  }
}
