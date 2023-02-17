import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'semana-sete-v2.0';

  imagesLocation = [
    '/assets/jojo.jpg',
    '/assets/csm.jpg',
    '/assets/geass.jpg',
    '/assets/kaguya.png',
    '/assets/away.jpg',
  ];
}
