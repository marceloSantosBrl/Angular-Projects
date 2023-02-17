import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss'],
})
export class GaleryComponent {
  @Input() images: string[] = [];

  indexOfCurrentImage = 0;

  goToNextImage() {
    if (this.indexOfCurrentImage !== this.images.length - 1) {
      this.indexOfCurrentImage += 1;
    }
  }

  goToPreviousImage() {
    if (this.indexOfCurrentImage !== 0) {
      this.indexOfCurrentImage -= 1;
    }
  }

  goToFirstImage() {
    this.indexOfCurrentImage = 0;
  }

  goToLastImage() {
    this.indexOfCurrentImage = this.images.length - 1;
  }
}
