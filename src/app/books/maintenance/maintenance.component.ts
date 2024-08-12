import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookCategory } from '../../model/models';
import { APIService } from '../../Module/shared/servis/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'maintenance',
  // standalone: true,
  // imports: [],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
    newCategory: FormGroup;

    constructor(
      fb: FormBuilder,
      private apiService: APIService,
      private snackBar: MatSnackBar
      

    )
    {
      this.newCategory = fb.group({
        category: fb.control('',[Validators.required]),
        subCategory: fb.control('',[Validators.required])
      });
    }

    addNewCategory(){
      let bookCategory: BookCategory ={
        id: 0,
        category: this.newCategory.get('category')?.value,
        subCategory: this.newCategory.get('subCategory')?.value
      }
      this.apiService.addNewCategory(bookCategory).subscribe({
        next:(res) =>{
          if (res === 'cannot insert') {
            this.snackBar.open('Already exists', 'Ok')
          }
          else{
            this.snackBar.open('Inserted', 'Ok')
          }
        }
      })
    }
}
