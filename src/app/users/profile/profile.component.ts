import { Component } from '@angular/core';
import { APIService } from '../../Module/shared/servis/api.service';

export interface TableElement{
  name: string;
  value: string;
}

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  columnToShow: string[] = ['name', 'value'];
  dataSource: TableElement[] = [];

  constructor(private apiServise: APIService){
    let user = apiServise.getUserInfo()!;
    this.dataSource = [
      {name: "Name", value: user.firstName + " " + user.lastName},
      {name: "Email", value: user.email},
      {name: "Mobile", value: user.mobileNumber},
      {name: "Account Status", value: `${user.accountStatus}`},
      {name: "Creation Date", value: user.createdOn},
      {name: "Type", value: `${user.userType}`},
    ]
  }

}
