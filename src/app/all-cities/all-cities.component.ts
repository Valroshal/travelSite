import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'keys'
// })
// export class KeysPipe implements PipeTransform {

//   transform(value: any, args?: any): any {
//     return Object.keys(value);
//   }
// }

export interface City{
  name: string;
  celsius: number; 
  weather: string; 
}

@Component({
  selector: 'app-all-cities',
  templateUrl: './all-cities.component.html',
  styleUrls: ['./all-cities.component.css']
})



export class AllCitiesComponent implements OnInit {

  private citiesUrl = 'http://localhost:5000'
  //cities: City[] = [];
  cities = new Set();

  public getCities(): Observable<Array<City>>{
    const citiesObservable = this.httpClient.get<City[]>(this.citiesUrl);
    return citiesObservable;
  }

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    const citiesObservable = this.getCities();
    citiesObservable.subscribe((citiesData: City[]) => {
      //this.cities = citiesData;
      for (const c of citiesData) { 
        this.cities.add(c);
      }

      //Iterate throw all keys.
      // for (const c of citiesData) { 
      //   this.cities.push(citiesData[c]);
      // }
      console.log("array of cities: ", this.cities);
    })
  }
}
