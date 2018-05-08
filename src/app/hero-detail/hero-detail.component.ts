import { Component, OnInit, Input } from '@angular/core';
import { Hero } from "../hero";
import { HeroService} from "../hero.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MessageService } from '../message.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

 
  constructor(private heroService: HeroService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private messageService: MessageService) { }

  // no longer we are accepting this value as input fromhero component as we have created this a root and fetch hero from service
  //@Input() hero:Hero

  hero:Hero;

  ngOnInit() {
    this.messageService.add("Navigated to hero detail View");
    this.getHero();
  }

  getHero(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero) => this.hero = hero );
    
  }
  goBack(): void {
    this.location.back();
  }


}
