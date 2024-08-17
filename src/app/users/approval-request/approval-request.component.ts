import { Component } from '@angular/core';
import { AccountStatus, User } from '../../model/models';
import { APIService } from '../../Module/shared/servis/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'approval-request',
  // standalone: true,
  // imports: [],
  templateUrl: './approval-request.component.html',
  styleUrl: './approval-request.component.scss'
})
export class ApprovalRequestComponent {
  
  columns: string[] = [
    'userId',
    'userName',
    'email',
    'userType',
    'createdOn',
    'approve'
  ]

  users: User[] = [];

  constructor(private apiService: APIService, private snackBar: MatSnackBar){
    apiService.getUsers().subscribe({
      next:(res: User[]) =>{
        console.log(res);
      this.users = res.filter(
        (u) => u.accountStatus == AccountStatus.UNAPROOVED 
      )
      }
    });
  }

  approve(user: User){
    this.apiService.aprooveRequest(user.id).subscribe({
      next:(res) => {
        if(res === 'Approved'){
          this.snackBar.open(`Approoved for the ${user.id}`, 'Ok')
        }
        else{
          this.snackBar.open('You are not aproved By admin', 'Ok')
        }
      }
    })
  }
  
}
