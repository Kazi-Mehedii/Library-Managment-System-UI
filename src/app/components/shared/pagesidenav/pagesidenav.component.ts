import { Component } from '@angular/core';

// interface for navigate item
export interface NavigateItem{
  value: string;
  link: string;
} 

@Component({
  selector: 'pagesidenav',
  templateUrl: './pagesidenav.component.html',
  styleUrl: './pagesidenav.component.scss'
})
export class PagesidenavComponent {

  //this is the panel name
  panelName: string = 'Student Panel';

  // variable of NavigateItem
  navItem: NavigateItem[] = [];

  constructor(){
    // initialize the navItem
    this.navItem = [
      {value:"View books",link:'view-books'},
      {value:'My Orders', link:'my-orders'}
    ]
  }

}
 