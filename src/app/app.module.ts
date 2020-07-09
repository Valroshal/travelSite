import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DestinationComponent } from './destination/destination.component';
import { AllCitiesComponent } from './all-cities/all-cities.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    DestinationComponent,
    AllCitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
