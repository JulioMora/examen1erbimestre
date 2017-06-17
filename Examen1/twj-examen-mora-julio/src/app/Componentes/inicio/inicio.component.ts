import { Component, OnInit } from '@angular/core';
import {HeroesClass} from "../../Clases/HeroesClass";
import {Http} from "@angular/http";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  heroes: HeroesClass[]= [];
  nuevoHeroe:HeroesClass=new HeroesClass();
  constructor(private _http:Http) { }

  ngOnInit() {
    this._http
      .get("http://localhost:1337/heroes/")
      .subscribe(
        respuesta=>{
          let rjson:HeroesClass[] = respuesta.json();

          this.heroes = rjson;

          console.log("Heroes: ",this.heroes);
        },
        error=>{
          console.log("Error: ",error)

        }
      )
  }
  crearHeroe(){
    console.log("Entro a crear heroe");

    this._http.post("http://localhost:1337/heroes/",this.nuevoHeroe).subscribe(respuesta=>{
      let respuestaJSON=respuesta.json();
      console.log('respuestaJSON',respuesta.json());
      this.heroes.push(respuestaJSON);
    },error=>{
      console.log("Error", error)
    })
  }
}
