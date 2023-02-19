import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input() public title: string = '';

  @Input() public imagesLocation: string[] = [];

  public indexOfCurrentImage = 0;

  goToNextImage(): void {
    if (this.indexOfCurrentImage !== this.imagesLocation.length - 1) {
      this.indexOfCurrentImage += 1;
    }
  }

  goToPreviousImage(): void {
    if (this.indexOfCurrentImage !== 0) {
      this.indexOfCurrentImage -= 1;
    }
  }

  goToFirstImage(): void {
    this.indexOfCurrentImage = 0;
  }

  goToLastImage(): void {
    this.indexOfCurrentImage = this.imagesLocation.length - 1;
  }
}
