import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fotos = [
    '/assets/jojo.jpg',
    '/assets/csm.jpg',
    '/assets/geass.jpg',
    '/assets/kaguya.png',
    '/assets/away.jpg',
  ];
}
