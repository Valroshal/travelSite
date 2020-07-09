import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllCitiesComponent } from './all-cities/all-cities.component';

const routes=[
  {
  path:'allcities', component:AllCitiesComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
