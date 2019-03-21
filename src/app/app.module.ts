import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PlacesComponentComponent } from './places-component/places-component.component';
import { PlaceComponent } from './place/place.component';
import { PlaceCdComponent } from './place-cd/place-cd.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PlacesComponentComponent, PlaceComponent, PlaceCdComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
