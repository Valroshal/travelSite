import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { AppComponent } from './app.component';
//const routes: Routes = []; // sets up routes constant where you define your routes
const routes: Routes =[
  // {path: 'app',
  // component: AppComponent,
  //   children:[
  //     {
  //       path: '', 
  //       redirectTo: '/app/all-cities', //full child path
  //       pathMatch: 'full'
  //     },
  //     {path:'app-all-cities', component:AppComponent},

  //     {
  //       path: '', 
  //       redirectTo: '/about', //full child path
  //       pathMatch: 'full'
  //     },
  //     {path:'about', component:AboutComponent},
  //   ]    
  // }
  // { path: '', redirectTo: '/about', pathMatch: 'full' },

  { path: 'app-home', component: HomeComponent },
  // { path: 'menu-bar', component: MenuBarComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
