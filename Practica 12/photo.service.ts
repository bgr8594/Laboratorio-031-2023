import { Injectable } from '@angular/core';
import { UserPhoto } from 'ruta/al/user-photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photos: UserPhoto[] = [
    {
      id: '1',
      title: 'Foto 1',
      imageUrl: 'ruta/a/la/imagen1.jpg'
    },
    {
      id: '2',
      title: 'Foto 2',
      imageUrl: 'ruta/a/la/imagen2.jpg'
    },
  ];

  getPhotos(): UserPhoto[] {
    return this.photos;
  }
}
