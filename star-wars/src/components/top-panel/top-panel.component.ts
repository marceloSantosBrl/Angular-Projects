import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StarWarsService } from '../../services/star-wars/star-wars.service';
import { ValidationService } from '../../services/validation-service/validation.service';

@Component({
  selector: 'app-top-panel',
  templateUrl: './top-panel.component.html',
  styleUrls: ['./top-panel.component.scss'],
})
export class TopPanelComponent implements OnDestroy {
  private cardDeletionSubscription!: Subscription;

  public cardDeletionId: FormControl = new FormControl<string>(
    '',
    [Validators.required, Validators.pattern(/^[0-9]*$/)],
  );

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

  public deleteCard(): void {
    this.cardDeletionSubscription = this.starWarsService
      .deleteCharacter(this.cardDeletionId.value)
      .subscribe(
        {
          error: () => alert('Erro ao deletar Personagem'),
        },
      );
    this.cardDeletionId.reset();
  }

  public ngOnDestroy(): void {
    this.cardDeletionSubscription.unsubscribe();
  }
}
