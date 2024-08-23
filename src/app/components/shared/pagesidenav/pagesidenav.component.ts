import { Component } from '@angular/core';
import { APIService } from '../../../Module/shared/servis/api.service';
import { Router } from '@angular/router';
import { UserType } from '../../../model/models';

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
  panelName: string = '';

  // variable of NavigateItem
  navItem: NavigateItem[] = [];

  constructor(private apiService: APIService, private router: Router){
    // initialize the navItem
    // this.navItem = [
    //   {value:"View books",link:'view-books'},
    //   {value:'My Orders', link:'my-orders'}
    // ];

    apiService.userStatus.subscribe({
      next: (status) =>{
        if(status == 'loggedIn'){
          router.navigateByUrl('/home');
          // console.log(APIService.getUserInfo());
          let user = apiService.getUserInfo();
          if (user != null) {
            if (user.userType == UserType.ADMIN) {
              this.panelName = 'Admin Panel';
              this.navItem = [
                {value: 'View Books', link:'/home'},
                {value:'Maintenance',link:'/maintenance'},
                {value: 'Return Books', link:'/return-book'},
                {value: 'Aprooval Request', link:'/aprooval-request'},
                {value:'All Users',link:'/all-users'},
                {value: 'All Orders', link:'/all-orders'},
                {value: 'My Order', link:'/mu-orders'},
              ];
            }
            else if(user.userType == UserType.STUDENT){
              this.panelName = "Student Panel"
              this.navItem = [
                {value:'View Books',link: '/home'},
                {value:'My Orders', link: '/my-orders'}
              ];
            }
          }
        }
        else if(status == 'loggedOff'){
          this.panelName = 'Auth Panel'
          router.navigateByUrl('/login');
          this.navItem = [];
        }
      }
    })
  }

}
 