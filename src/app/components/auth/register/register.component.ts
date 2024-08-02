import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../../../Module/shared/servis/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  hidepassword: boolean = true;

  constructor(private fb: FormBuilder,private APIService:APIService, private snackBar:MatSnackBar) {
    this.registerForm = fb.group({
      firstName: fb.control('d',[Validators.required]),
      lastName: fb.control('k',Validators.required),
      email: fb.control('',Validators.required),
      mobile: fb.control('',Validators.required),
      password: fb.control('',Validators.required),
      cpassword: fb.control('',Validators.required)
    });

  }

  //for submite data form to ts file
  register(){
    let user = {
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      email: this.registerForm.get('email')?.value,
      mobile: this.registerForm.get('mobile')?.value,
      password: this.registerForm.get('password')?.value,
    };

    //for connect to api
   this.APIService.register(user).subscribe({
    next:(res) => {
      this.snackBar.open(res, 'Ok')
    }
   })
  }

}
