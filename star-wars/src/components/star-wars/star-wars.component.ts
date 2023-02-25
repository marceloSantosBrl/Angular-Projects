import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../../services/star-wars/star-wars.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss'],
})
export class StarWarsComponent implements OnInit {
  constructor(public readonly starWarsService: StarWarsService) {
  }

  public ngOnInit(): void {
    this.starWarsService.getAllCharacters();
  }
}
