import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HeroesComponent  as HC} from "./heroes/heroes.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes:Routes = [
  // this is to instruct router to load dashboard when url doesnt contain any path,
  // pathMatch is to match exactly 
  { path: "" , redirectTo:"dashboard", pathMatch: 'full' },
  { path: 'dashboard' , component: DashboardComponent },
  { path : 'heroes' , component: HC },
  { path: 'detail/:id' , component: HeroDetailComponent}
  
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  // we dont declare any modules here so comment it
  //declarations: []

  // we need to export Router Module here so that when its included in AppComponent,
  // all the modules that are linked to AppComponent can use Router methods
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
