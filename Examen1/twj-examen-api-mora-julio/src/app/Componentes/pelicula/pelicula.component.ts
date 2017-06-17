import {Component, OnInit, Input} from '@angular/core';
import {PeliculasSpielberg} from "../../Interfaces/PeliculasSpielberg";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
@Input() peliculas:PeliculasSpielberg
  constructor() {
  console.log("Datos",this.peliculas)
  }

  ngOnInit() {
  }

}
