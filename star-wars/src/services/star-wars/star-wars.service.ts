import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StarWarsCharacterModel } from '../../models/star-wars-character/star.wars.character.model';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  public currentCharacters!: Observable<StarWarsCharacterModel[]>;

  constructor(private http: HttpClient) { }

  public getCharacter(characterId: string): void {
    this.currentCharacters = this
      .http.get<StarWarsCharacterModel>(environment.API_URL + characterId)
      .pipe(map((x) => ([x])));
  }

  public getAllCharacters(): void {
    this.currentCharacters = this.http.get<StarWarsCharacterModel[]>(environment.API_URL);
  }

  public addCharacter(character: StarWarsCharacterModel): Observable<Object> {
    return this.http.post(environment.API_URL, character);
  }

  public deleteCharacter(characterId: string): Observable<Object> {
    return this.http.delete(environment.API_URL + characterId);
  }

  public updateCharacter(
    characterId: string,
    character: StarWarsCharacterModel,
  ): Observable<Object> {
    return this.http.put(environment.API_URL + characterId, character);
  }
}
