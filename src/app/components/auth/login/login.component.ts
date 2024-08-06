import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../../../Module/shared/servis/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    loginForm: FormGroup;
    hidepassword: boolean =true;

    constructor(fb: FormBuilder,private apiService:APIService,private snackBar:MatSnackBar){
        this.loginForm = fb.group({
          email: fb.control('',[Validators.required]),
          password: fb.control('',[Validators.required])
        });
    }

    login(){
      let loginfo = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      };
      this.apiService.login(loginfo).subscribe({
        next:(res) => {
          if (res  == "not found") {
            this.snackBar.open('Credential is Not Valid', 'Ok');
          }
          else if(res == "Not approved"){
            this.snackBar.open("Your Account is Not Aproved By ADmin")
          }
          else{
            localStorage.setItem('access_token', res);
            this.apiService.userStatus.next("loggedIn")
          }
        }

      })
    }


}

