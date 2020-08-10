import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private citiesUrl = 'api/citiesArray'
  cities: City[] = [];

  public getCities(): Observable<Array<City>>{
    const citiesObservable = this.httpClient.get<City[]>(this.citiesUrl);
    return citiesObservable;
  }

  scrollWidth = this.cities.length *350 + "px";



  title = "Pick a category for your next adventure"

  travelOptions = ['Popular', 'Cheap', 'HotDeal'];

  toggle : any = false;

  retToggle(){
    console.log('toggle: ' + this.toggle);
    this.toggle=!this.toggle;
  }

  //list with dropdown options
  list1 = {
    opacity : 0.55
  };
  list2 = {
    opacity : 0.55
  };
   
  changeStyle(list){
    if(list.opacity == 0.55)
      {
        list.opacity = 0;
      }
    else
      list.opacity = 0.55;
     
    console.log(list.opacity);    
  }

  constructor( private httpClient: HttpClient) { }

  
  ngOnInit(): void {
    const citiesObservable = this.getCities();
    citiesObservable.subscribe((citiesData: City[]) => {
      this.cities = citiesData;
      console.log(this.cities);
    })
  }


}


  // cities: City[] = [
  //   {
  //     name: "New York",
  //     img: 'assets/icons/NY.jpg',
  //     amount: '967$',
  //     km: '257km away', //get from site, with some function
  //     celsius: 26, //get from site, with some function
  //     weather: 'bolt', //get from site, with some function
  //     like: '4k',
  //     message: 400
  //   },
  //   {
  //     name: "New York",
  //     img: 'assets/icons/NY.jpg',
  //     amount: '967$',
  //     km: '257km away', //get from site, with some function
  //     celsius: 26, //get from site, with some function
  //     weather: 'bolt', //get from site, with some function
  //     like: '4k',
  //     message: 400
  //   },
  //   {
  //     name: "New York",
  //     img: 'assets/icons/NY.jpg',
  //     amount: '967$',
  //     km: '257km away', //get from site, with some function
  //     celsius: 26, //get from site, with some function
  //     weather: 'bolt', //get from site, with some function
  //     like: '4k',
  //     message: 400
  //   },
  //   {
  //     name: "New York",
  //     img: 'assets/icons/NY.jpg',
  //     amount: '967$',
  //     km: '257km away', //get from site, with some function
  //     celsius: 26, //get from site, with some function
  //     weather: 'bolt', //get from site, with some function
  //     like: '4k',
  //     message: 400
  //   },
  //   {
  //     name: "New York",
  //     img: 'assets/icons/NY.jpg',
  //     amount: '967$',
  //     km: '257km away', //get from site, with some function
  //     celsius: 26, //get from site, with some function
  //     weather: 'bolt', //get from site, with some function
  //     like: '4k',
  //     message: 400
  //   },
  //   {
  //     name: "New York",
  //     img: 'assets/icons/NY.jpg',
  //     amount: '967$',
  //     km: '257km away', //get from site, with some function
  //     celsius: 26, //get from site, with some function
  //     weather: 'bolt', //get from site, with some function
  //     like: '4k',
  //     message: 400
  //   },
  //   {
  //     name: "New York",
  //     img: 'assets/icons/NY.jpg',
  //     amount: '967$',
  //     km: '257km away', //get from site, with some function
  //     celsius: 26, //get from site, with some function
  //     weather: 'bolt', //get from site, with some function
  //     like: '4k',
  //     message: 400
  //   },
  //   {
  //     name: "New York",
  //     img: 'assets/icons/NY.jpg',
  //     amount: '967$',
  //     km: '257km away', //get from site, with some function
  //     celsius: 26, //get from site, with some function
  //     weather: 'bolt', //get from site, with some function
  //     like: '4k',
  //     message: 400
  //   }
  // ];