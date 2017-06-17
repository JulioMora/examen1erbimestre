import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { HeroesComponent } from './Componentes/heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InicioComponent]
})
export class AppModule { }
