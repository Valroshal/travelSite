import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-place-in-cities',
  templateUrl: './place-in-cities.component.html',
  styleUrls: ['./place-in-cities.component.css']
})
export class PlaceInCitiesComponent implements OnInit {

  @Input() city
  
  constructor() { }

  ngOnInit(): void {
  }

}
