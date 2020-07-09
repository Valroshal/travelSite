import { Component, OnInit, NgModule } from '@angular/core';
// import {RouterModule} from '@angular/router';
// import { AllCitiesComponent } from '../all-cities/all-cities.component';

// const routes=[
//   {
//   path:'item', component:AllCitiesComponent
// }]

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

listItem = [{
  imgList: 'assets/icons/travels.png',
  menuList: 'travelling'
},{
  imgList: 'assets/icons/explore.png',
  menuList: 'explore'
},{
  imgList: 'assets/icons/saved.png',
  menuList: 'saved'
},{
  imgList: 'assets/icons/profile.png',
  menuList: 'profile'
}];

  //  imgList = ['assets/icons/travels.png','assets/icons/explore.png','assets/icons/saved.png','assets/icons/profile.png'];
  // // imgList = ['icons/travels.png','icons/explore.png','icons/saved.png','icons/profile.png'];
  // menuList = ['travelling','explore','saved','profile'];

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
