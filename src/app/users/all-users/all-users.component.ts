import { Component } from '@angular/core';
import { User } from '../../model/models';
import { APIService } from '../../Module/shared/servis/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'all-users',
  // standalone: true,
  // imports: [],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.scss'
})
export class AllUsersComponent {
    columns: string[] = [
      'userId',
      'userName',
      'email',
      'mobileNumber',
      'accountStatus',
      'userType',
      'createdOn',
      'unblock'
    ]

    user: User[] =[];

    constructor(private apiService: APIService, private snackbar: MatSnackBar){
      apiService.getUsers().subscribe({
        next:(res: User[]) => {
          this.user = res;
          // res.forEach((r)=> this.user.push(r));
        }
      })
    }

    unblockUser(user: User){
      const id = user.id;

      this.apiService.unblock(id).subscribe({
        next:(res)=>{
          if(res==='unblocked'){
            this.snackbar.open('User successfully Unblocked', 'Ok');
          }else{
            this.snackbar.open('Not unblocked', 'Ok');
          }
        }
      })
    }
}
