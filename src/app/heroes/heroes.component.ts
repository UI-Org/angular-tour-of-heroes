import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HEROES } from "./mock-heroes"
import { HeroService } from "../hero.service";
import { MessageService } from "../message.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})

export class HeroesComponent implements OnInit {
  //inject as private variable
  constructor(private heroService : HeroService, private messageService: MessageService) {
  }

  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit() {
    //this.fetchHeroes();
    this.messageService.add(`Navigated to ${this.constructor.name} view`)
    this.fetchHeroesAsync();
    console.log(this.heroes)
  }

  fetchHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }
  
  fetchHeroesAsync():void{
    this.heroService.getHeroesAsync().subscribe(heroes => this.heroes = heroes)
  }

  onSelectHero(selectedHero: Hero) {
    this.selectedHero = selectedHero;
  }

}