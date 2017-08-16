
import {RouterModule, Routes} from '@angular/router';
import {PeliculasNodeComponent} from "./Componentes/peliculas-node/peliculas-node.component";
import {ModuleWithProviders} from "@angular/core";
import {InicioComponent} from "./Componentes/inicio/inicio.component";
/**
 * Created by julio_000 on 15/08/2017.
 */
export const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,

  },
  {
    path: 'peliculas-node',
    component: PeliculasNodeComponent,
  }


];
export const RoutesAppModules: ModuleWithProviders = RouterModule.forRoot(routes);
