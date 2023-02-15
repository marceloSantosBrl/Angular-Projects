import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent {
  @Input() images: string[] = [];

  indexImagemAtual = 0;

  goToNextImage() {
    if (this.indexImagemAtual !== this.images.length - 1) {
      this.indexImagemAtual += 1;
    }
  }

  goToPreviousImage() {
    if (this.indexImagemAtual !== 0) {
      this.indexImagemAtual -= 1;
    }
  }

  goToFirstImage() {
    this.indexImagemAtual = 0;
  }

  goToLastImage() {
    this.indexImagemAtual = this.images.length - 1;
  }
}
