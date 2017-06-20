import {Component, OnInit, Input} from '@angular/core';
import {HeroesClass} from "../../Clases/HeroesClass";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() heroesInput:HeroesClass;
  constructor() {
    console.log("datos",this.heroesInput)
  }

  ngOnInit() {
  }

}
