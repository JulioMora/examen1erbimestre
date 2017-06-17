import {Component, OnInit, Input} from '@angular/core';
import {HeroesClass} from "../../Clases/HeroesClass";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() heroes:HeroesClass;
  constructor() {
    console.log("datos",this.heroes)
  }

  ngOnInit() {
  }

}
