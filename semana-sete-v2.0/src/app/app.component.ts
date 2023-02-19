import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title: string = 'Fotos de anime';

  public imagesLocation: string[] = [
    '/assets/jojo.jpg',
    '/assets/csm.jpg',
    '/assets/geass.jpg',
    '/assets/kaguya.png',
    '/assets/away.jpg',
  ];
}
