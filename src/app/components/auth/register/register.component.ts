import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  hidepassword: boolean = true;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      firstName: fb.control('d',[Validators.required]),
      lastName: fb.control('k',Validators.required),
      email: fb.control('',Validators.required),
      mobile: fb.control('',Validators.required),
      password: fb.control('',Validators.required),
      cpassword: fb.control('',Validators.required)
    });

  }

  register(){
    let user = {
      firstName: this.registerForm.get('firstName')?.value,
      lastName: this.registerForm.get('lastName')?.value,
      email: this.registerForm.get('email')?.value,
      mobile: this.registerForm.get('mobile')?.value,
      password: this.registerForm.get('password')?.value,
    }
  }

}
