import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DestinationComponent } from './destination/destination.component';
import { AllCitiesComponent } from './all-cities/all-cities.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataServiceService } from './api/data-service.service';
import { PlaceInCitiesComponent } from './place-in-cities/place-in-cities.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    DestinationComponent,
    AllCitiesComponent,
    AboutComponent,
    HomeComponent,
    ContactsComponent,
    PlaceInCitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    //remove this when real API will be ready
    // HttpClientInMemoryWebApiModule.forRoot(
    //   DataServiceService, {dataEncapsulation: false}
    //)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
