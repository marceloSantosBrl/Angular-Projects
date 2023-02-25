import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from '../components/card/card.component';
import { StarWarsComponent } from '../components/star-wars/star-wars.component';
import { DeletionComponent } from '../components/deletion/deletion.component';
import { UpdateAdditionComponent } from '../components/update-adition/update-addition.component';
import { GenerationComponent } from '../components/generation/generation.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StarWarsComponent,
    DeletionComponent,
    UpdateAdditionComponent,
    GenerationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
