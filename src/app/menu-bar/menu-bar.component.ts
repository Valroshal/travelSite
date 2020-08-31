import { Component, OnInit, NgModule } from '@angular/core';

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

  color = true;

  changeColor(tab)
  {
    console.log('color: ' + this.color);
    if(tab == 'about' || tab == 'contacts' || tab == 'all-cities')
      this.color = false;
    else if (tab == 'home')
      this.color = true;
    
  }

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

 

  constructor() { }

  ngOnInit(): void {
  }


}
