import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleryComponent } from './components/galery/galery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NamiComponent} from "./components/nami/nami.component";

@NgModule({
  declarations: [
    AppComponent,
    GaleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NamiComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
