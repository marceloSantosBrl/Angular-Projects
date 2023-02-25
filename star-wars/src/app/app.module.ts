import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from '../components/card/card.component';
import { StarWarsComponent } from '../components/star-wars/star-wars.component';
import { TopPanelComponent } from '../components/top-panel/top-panel.component';
import { BottomPanelComponent } from '../components/bottom-panel/bottom-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    StarWarsComponent,
    TopPanelComponent,
    BottomPanelComponent,
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
