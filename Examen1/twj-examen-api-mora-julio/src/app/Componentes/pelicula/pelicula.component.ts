import {Component, OnInit, Input} from '@angular/core';
import {PeliculasSpielberg} from "../../Interfaces/PeliculasSpielberg";
import {PeliculaClass} from "../../Clases/PeliculaClass";
import {Http} from "@angular/http";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
@Input() peliculasInput:PeliculasSpielberg
  peliculas: PeliculaClass[]= [];
  nuevoPelicula:PeliculaClass=new PeliculaClass("");
  constructor(private _http:Http) {
  console.log("Datos",this.peliculasInput)
  }

  ngOnInit() {
  }
  guardarNode(pelicula:PeliculasSpielberg){

     this._http.post("https://twj2017a-julio.mybluemix.net/peliculas",pelicula).subscribe(respuesta=>{
     let respuestaJSON=respuesta.json();
     console.log('respuestaJSON',respuesta.json());
     this.peliculas.push(respuestaJSON);
     },error=>{
     console.log("Error", error)
     })
     }

}
