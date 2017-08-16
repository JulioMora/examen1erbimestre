import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {PeliculasSpielberg} from "../../Interfaces/PeliculasSpielberg";
import {Http} from "@angular/http";

@Component({
  selector: 'app-peliculas-node',
  templateUrl: './peliculas-node.component.html',
  styleUrls: ['./peliculas-node.component.css']
})
export class PeliculasNodeComponent implements OnInit {
  @Input() PeliNodeInput: PeliculasSpielberg;
  @Output() PeliNodeOutput= new EventEmitter();
  pelis: PeliculasSpielberg[]=[];
  constructor(private _http:Http) { }

  ngOnInit() {
    this._http
      .get("https://twj2017a-julio.mybluemix.net/peliculas")
      .subscribe(
        respuesta=>{
          let rjson:PeliculasSpielberg[] = respuesta.json();

          this.pelis = rjson;

          /*
           //anadir propiedades a objetos
           let objeto1:any = {
           prop1:1,
           prop2:2
           }
           objeto1.prop3 = 3;
           */

          console.log("Pelis: ",this.pelis);
        },
        error=>{
          console.log("Error: ",error)

        }
      )
  }
  eliminarPeliBackend(peli: PeliculasSpielberg,indice:number) {

    this._http.delete("https://twj2017a-julio.mybluemix.net/peliculas?id="+peli._id)
      .subscribe(
        respuesta=>{
          this.PeliNodeOutput.emit(peli);
          //this.usuarios.splice(this.usuarios.indexOf(usuario),1)
        },
        error=>{
          console.log("Error",error);
        }
      )

  }
}