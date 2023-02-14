import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent {
  @Input() fotos: string[] = [];

  indexImagemAtual = 0;

  nextImage() {
    if (this.indexImagemAtual !== this.fotos.length - 1) {
      this.indexImagemAtual += 1;
    }
  }

  previousImage() {
    if (this.indexImagemAtual !== 0) {
      this.indexImagemAtual -= 1;
    }
  }

  goToFirstImage() {
    this.indexImagemAtual = 0;
  }

  goToLastImage() {
    this.indexImagemAtual = this.fotos.length - 1;
  }
}
