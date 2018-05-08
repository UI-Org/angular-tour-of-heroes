import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from "@angular/common/http";
// should always load after HttpClientModule
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryHeroService } from "./in-memory-hero.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      // bypass unknown urls to actual xhr 
      // adds delay 500 ms before returning response 
      // if dataencapsulation is true, the data is wrapper in a 'data' object and returned and needs to be accessed as response.body.body
      // if false, just collection is returned directly in the response and can be accessed as reponse.body
      InMemoryHeroService, { dataEncapsulation : false, delay:500, passThruUnknownUrl:true } 
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
