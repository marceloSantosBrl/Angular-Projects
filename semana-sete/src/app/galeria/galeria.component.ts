import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent {

  currentImage = 0;

  nextImage() {
    if (this.currentImage !== 4) {
      this.currentImage += 1;
    }
  }

  previousImage() {
    if (this.currentImage !== 0) {
      this.currentImage -= 1;
    }
  }

  firstImage()

}
