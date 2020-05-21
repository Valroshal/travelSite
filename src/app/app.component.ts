import { Component } from '@angular/core';

export interface City{
    name: string;
    img: string;
    amount: string;
    km: string;
    celsius: number; 
    weather: string; 
    like: string;
    message: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelSite';

  cities: City[] = [
    {
      name: "New York",
      img: 'assets/icons/NY.jpg',
      amount: '967$',
      km: '257km away', //get from site, with some function
      celsius: 26, //get from site, with some function
      weather: 'bolt', //get from site, with some function
      like: '4k',
      message: 400
    },
    {
      name: "New York",
      img: 'assets/icons/NY.jpg',
      amount: '967$',
      km: '257km away', //get from site, with some function
      celsius: 26, //get from site, with some function
      weather: 'bolt', //get from site, with some function
      like: '4k',
      message: 400
    }
  ];
  // city ={
  //   name: "New York",
  //   img: 'assets/icons/NY.jpg',
  //   amount: '967$',
  //   km: '257km away', //get from site, with some function
  //   celsius: 26, //get from site, with some function
  //   weather: 'bolt', //get from site, with some function
  //   like: '4k',
  //   message: 400
  // }
}
