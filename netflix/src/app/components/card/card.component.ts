import { Component, Input } from '@angular/core';
import { IMovie } from '../../models/imovie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('movie') public movie!:IMovie;
}
