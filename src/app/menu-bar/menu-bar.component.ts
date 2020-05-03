import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {



  imgList = ['assets/icons/travels.png','assets/icons/explore.png','assets/icons/saved.png','assets/icons/profile.png'];

  menuList = ['travelling','explore','saved','profile'];

  title = "Pick a category for your next adventure"

  travelOptions = ['Popular', 'Cheap', 'HotDeal'];

  toggle : any = false;

  retToggle(){
    console.log('toggle: ' + this.toggle);
    this.toggle=!this.toggle;
  }

  //list with dropdown options
  list = {
    opacity : 0.55
  };
   
  changeStyle(){
    if(this.list.opacity == 0.55)
      {
        // this.display = 'inline-block';
        this.list.opacity = 0;
      }
    else
      this.list.opacity = 0.55;
     
    console.log(this.list.opacity);    
  }

  constructor() { }

  ngOnInit(): void {
  }


}
