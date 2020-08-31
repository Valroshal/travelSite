import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'travelSite';

  //example not used for now, used in all-cities component
  // messages = this.http.get<any[]>('http://localhost:5000');
  // constructor(private http: HttpClient){}
}

