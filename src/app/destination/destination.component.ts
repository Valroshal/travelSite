import { Component, OnInit, Input, ContentChild, ElementRef } from '@angular/core';

import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  @Input() city

  @ContentChild('info', {static: true}) infoRef: ElementRef
  constructor() { }

  ngOnInit(): void {
    // console.log(this.infoRef.nativeElement);
  }
  // nuzhno sdelat' interface
  // city = {
  //   name: "New York",
  //   img: 'assets/icons/NY.jpg',
  //   amount: '967$',
  //   km: '257km away', //get from site, with some function
  //   celsius: '26', //get from site, with some function
  //   weather: 'bolt', //get from site, with some function
  //   like: '4k',
  //   message: 400
  // }
}
