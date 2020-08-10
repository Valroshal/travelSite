import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService implements InMemoryDbService {
  createDb(){
    const citiesArray =[
      {
        name: "New York",
        img: 'assets/icons/NY.jpg',
        amount: '967$',
        km: '257km away', 
        celsius: 26, 
        weather: 'bolt', 
        like: '4k',
        message: 400
      },
      {
        name: "New York",
        img: 'assets/icons/NY.jpg',
        amount: '967$',
        km: '257km away', 
        celsius: 26, 
        weather: 'bolt', 
        like: '4k',
        message: 400
      },
      {
        name: "New York",
        img: 'assets/icons/NY.jpg',
        amount: '967$',
        km: '257km away', 
        celsius: 26, 
        weather: 'bolt', 
        like: '4k',
        message: 400
      },
      {
        name: "New York",
        img: 'assets/icons/NY.jpg',
        amount: '967$',
        km: '257km away', 
        celsius: 26, 
        weather: 'bolt', 
        like: '4k',
        message: 400
      },
      {
        name: "New York",
        img: 'assets/icons/NY.jpg',
        amount: '967$',
        km: '257km away', 
        celsius: 26, 
        weather: 'bolt', 
        like: '4k',
        message: 400
      },
      {
        name: "New York",
        img: 'assets/icons/NY.jpg',
        amount: '967$',
        km: '257km away', 
        celsius: 26, 
        weather: 'bolt', 
        like: '4k',
        message: 400
      },
      {
        name: "New York",
        img: 'assets/icons/NY.jpg',
        amount: '967$',
        km: '257km away', 
        celsius: 26, 
        weather: 'bolt', 
        like: '4k',
        message: 400
      }
    ];
    return { citiesArray };
  }
  constructor() { }
}
