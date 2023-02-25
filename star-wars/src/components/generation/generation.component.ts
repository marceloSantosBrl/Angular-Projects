import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { StarWarsService } from '../../services/star-wars/star-wars.service';
import { ValidationService } from '../../services/validation-service/validation.service';

@Component({
  selector: 'app-generation',
  templateUrl: './generation.component.html',
  styleUrls: ['./generation.component.scss'],
})
export class GenerationComponent {
  public cardFetchId: FormControl = new FormControl<string>(
    '',
    [Validators.required, Validators.pattern(/^[0-9]*$/)],
  );

  constructor(
    private readonly starWarsService: StarWarsService,
    public readonly validationService: ValidationService,
  ) { }

  public generateSingleCard(): void {
    this.starWarsService.getCharacter(this.cardFetchId.value);
    this.cardFetchId.reset();
  }

  public generateAllCards(): void {
    this.starWarsService.getAllCharacters();
  }
}
