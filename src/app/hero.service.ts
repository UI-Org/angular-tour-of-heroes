import { Injectable, OnInit } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./heroes/mock-heroes";
import { Observable, of } from 'rxjs';
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { heroesApi } from "./app-urls";

@Injectable({
  //this is angular 6.0 way to say its singleton has only one instance per app
  providedIn: 'root'
})
export class HeroService implements OnInit {

  constructor(private messageService: MessageService, private http: HttpClient) { }
  ngOnInit(){
    console.log("Hero service invoked")
  }
  // usually a method in serivice needs to return a promise or an observable
  getHeroes(): Hero[]{
    //this.messageService.add("Hero service asked for heroes")
      return HEROES
  }
  // getHeroesAsync(): Observable<Hero[]>{
  //   //this.messageService.add("Hero service asked for heroes and is feteched asynchronously!");
  //   return of(HEROES);
  // }
  getHeroesAsync(): Observable<Hero[]>{
    return this.http.get<Hero[]>(heroesApi)
  }
  getHero(id: number):Observable<Hero>{
    return of(HEROES.find((hero) => hero.id === id ));
    
  }
  
}
