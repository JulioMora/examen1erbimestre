import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { PeliculaComponent } from './Componentes/pelicula/pelicula.component';
import { PeliculasNodeComponent } from './Componentes/peliculas-node/peliculas-node.component';
import {RoutesAppModules} from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PeliculaComponent,
    PeliculasNodeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesAppModules,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
