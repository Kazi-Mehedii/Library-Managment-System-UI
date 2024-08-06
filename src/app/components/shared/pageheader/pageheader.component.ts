import { Component } from '@angular/core';
import { APIService } from '../../../Module/shared/servis/api.service';

@Component({
  selector: 'pageheader',
  templateUrl: './pageheader.component.html',
  styleUrl: './pageheader.component.scss'
})
export class PageheaderComponent {
  /**
   *
   */
  loggedIn :boolean = false;
  name : string = '';
  constructor(private apiService : APIService) { 
    apiService.userStatus.subscribe({
      next:(res) => {
        if (res == 'loggedIn') {
          this.loggedIn = true;
          let user = apiService.getUserInfo();
          this.name = `${user?.firstName} ${user?.lastName}`;
        }
        else{
          this.loggedIn = false;
          this.name = '';
        }
      }
    })
  }

  
  logout(){
    this.apiService.logout();
  }

  
  
}
