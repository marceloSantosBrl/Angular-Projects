import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { StarWarsCharacterModel } from '../../models/star-wars-character/star.wars.character.model';

@Injectable({
  providedIn: 'root',
})
export class StarWarsService {
  public currentCharacters!: Observable<StarWarsCharacterModel[]>;

  constructor(private http: HttpClient) { }

  public getCharacter(characterId: string): void {
    this.currentCharacters = this.http.get<StarWarsCharacterModel>(environment.apiUrl + characterId)
      .pipe(map((x) => ([x])));
  }

  public getAllCharacters(): void {
    this.currentCharacters = this.http.get<StarWarsCharacterModel[]>(environment.apiUrl);
  }

  public addCharacter(character: StarWarsCharacterModel): Observable<Object> {
    return this.http.post(environment.apiUrl, character);
  }

  public deleteCharacter(characterId: string): Observable<Object> {
    return this.http.delete(environment.apiUrl + characterId);
  }

  public updateCharacter(
    characterId: string,
    character: StarWarsCharacterModel,
  ): Observable<Object> {
    return this.http.put(environment.apiUrl + characterId, character);
  }
}
