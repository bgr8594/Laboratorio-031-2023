import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'ruta/al/photo.service';
import { UserPhoto } from 'ruta/al/user-photo.interface';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss']
})
export class GaleriaPage implements OnInit {
  photos: UserPhoto[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photos = this.photoService.getPhotos();
  }
}
