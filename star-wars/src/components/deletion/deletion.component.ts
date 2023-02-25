import { Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { StarWarsService } from '../../services/star-wars/star-wars.service';
import { ValidationService } from '../../services/validation-service/validation.service';

@Component({
  selector: 'app-deletion',
  templateUrl: './deletion.component.html',
  styleUrls: ['./deletion.component.scss'],
})
export class DeletionComponent implements OnDestroy {
  private cardDeletionSubscription!: Subscription;

  public cardDeletionId: FormControl = new FormControl<string>(
    '',
    [Validators.required, Validators.pattern(/^[0-9]*$/)],
  );

  constructor(
    private readonly starWarsService: StarWarsService,
    public readonly validationService: ValidationService,
  ) { }

  public deleteCard(): void {
    this.cardDeletionSubscription = this.starWarsService
      .deleteCharacter(this.cardDeletionId.value)
      .subscribe(
        {
          complete: () => {
            this.starWarsService.getAllCharacters();
            alert('Personagem deletado com sucesso');
          },
          error: () => alert('Erro ao deletar personagem'),
        },
      );
    this.cardDeletionId.reset();
  }

  public ngOnDestroy(): void {
    this.cardDeletionSubscription.unsubscribe();
  }
}
