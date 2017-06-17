import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {PeliculasSpielberg} from "../../Interfaces/PeliculasSpielberg";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  peliculas : PeliculasSpielberg[]=[];
  constructor(private _http:Http) { }

  ngOnInit() {
    this._http
      .get("http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino")
      .subscribe(
        respuesta=>{
          let rjson:PeliculasSpielberg[] = respuesta.json();

          this.peliculas = rjson;

          console.log("Usuarios: ",this.peliculas);
        },
        error=>{
          console.log("Error: ",error)

        }
      )
  }

}
