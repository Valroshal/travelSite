import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCitiesComponent } from './all-cities/all-cities.component';
import { AboutComponent } from './about/about.component';

import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AppComponent } from './app.component';
//const routes: Routes = []; // sets up routes constant where you define your routes
const routes: Routes =[
  {path: 'app',
  component: AppComponent,
    children:[
      {path:'allcities', component:AppComponent},
      //{path:':about', component:AppComponent}
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
