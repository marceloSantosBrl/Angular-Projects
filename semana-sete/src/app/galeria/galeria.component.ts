import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent {
  currentImage = 0;

  imgArray = [
    '/assets/jojo.jpg',
    '/assets/csm.jpg',
    '/assets/geass.jpg',
    '/assets/kaguya.png',
    '/assets/away.jpg',
  ];

  nextImage() {
    if (this.currentImage !== this.imgArray.length - 1) {
      this.currentImage += 1;
    }
  }

  previousImage() {
    if (this.currentImage !== 0) {
      this.currentImage -= 1;
    }
  }

  goToFirstImage() {
    this.currentImage = 0;
  }

  goToLastImage() {
    this.currentImage = this.imgArray.length - 1;
  }
}
