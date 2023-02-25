import { Component, OnDestroy } from '@angular/core';
import {
  FormGroup, NonNullableFormBuilder, Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { StarWarsService } from '../../services/star-wars/star-wars.service';
import { StarWarsCharacterModel } from '../../models/star-wars-character/star.wars.character.model';
import { ValidationService } from '../../services/validation-service/validation.service';

@Component({
  selector: 'app-update-adition',
  templateUrl: './update-addition.component.html',
  styleUrls: ['./update-addition.component.scss'],
})
export class UpdateAdditionComponent implements OnDestroy {
  updateSubscription!: Subscription;

  addSubscription!: Subscription;

  public characterForm: FormGroup = this.fb.group({
    id: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    nome: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
    habilidade: ['', Validators.required],
    planeta: ['', Validators.required],
    armas: ['', Validators.required],
    avatar: ['', Validators.required],
  });

  constructor(
    private readonly starWarsService: StarWarsService,
    private readonly fb: NonNullableFormBuilder,
    public readonly validationService: ValidationService,
  ) {
  }

  public updateCard(): void {
    const starWarsCharacter:
    StarWarsCharacterModel = <StarWarsCharacterModel> this.characterForm.value;
    this.updateSubscription = this.starWarsService
      .updateCharacter(starWarsCharacter.id, starWarsCharacter)
      .subscribe(
        {
          complete: () => {
            this.starWarsService.getAllCharacters();
            alert('Personagem atualizado com sucesso');
          },
          error: () => alert('Erro ao atualizar personagem'),
        },
      );
    this.characterForm.reset();
  }

  public addCard(): void {
    const starWarsCharacter
    : StarWarsCharacterModel = <StarWarsCharacterModel> this.characterForm.value;
    this.addSubscription = this.starWarsService
      .addCharacter(starWarsCharacter)
      .subscribe(
        {
          complete: () => {
            this.starWarsService.getAllCharacters();
            alert('Personagem adicionado com sucesso');
          },
          error: () => alert('Erro ao adicionar personagem'),
        },
      );
    this.characterForm.reset();
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
    this.addSubscription.unsubscribe();
  }
}
