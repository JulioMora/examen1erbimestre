import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PeliculaComponent } from './Componentes/pelicula/pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PeliculaComponent
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
