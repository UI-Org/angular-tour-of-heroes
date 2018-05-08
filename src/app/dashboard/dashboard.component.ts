import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";
import { Hero } from '../hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  heroes: Hero[];

  ngOnInit() {
    this.messageService.add("Navigated to Dashboard View");
    this.getHeroes();
  }

  getHeroes(): void {
    //slice to show only 2,3,4,5 heroes
   this.heroService.getHeroesAsync().subscribe(heroes => this.heroes = heroes.slice(1,5))
  }

}
