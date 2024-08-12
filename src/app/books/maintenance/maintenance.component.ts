import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Book, BookCategory } from '../../model/models';
import { APIService } from '../../Module/shared/servis/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface CategoryOption{
  dispalyValue:string;
  value: number;
}

@Component({
  selector: 'maintenance',
  // standalone: true,
  // imports: [],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
    newCategory: FormGroup;
    newBook: FormGroup;
    categoryOption: CategoryOption[] = [];

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

      this.newBook = fb.group({
        title: fb.control('',[Validators.required]),
        author: fb.control('',[Validators.required]),
        price: fb.control('',[Validators.required]),
        category: fb.control('',[Validators.required]),
      });

      apiService.getCategory().subscribe({
        next:(res: BookCategory[]) => {
          res.forEach((bc) => {
            this.categoryOption.push({
              value:bc.id,
              dispalyValue: `${bc.category} / ${bc.subCategory}`
              
            });
          });
        },
      })

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
      this.newCategory.reset();
    }

    addNewBook(){
      let book: Book = {
        id: 0,
        title: this.newBook.get('title')?.value,
        author: this.newBook.get('author')?.value,
        bookCategoryId:this.newBook.get('category')?.value,
        price:this.newBook.get('price')?.value,
        bookCategory: {id: 0, category:'', subCategory:''},
        ordered:false
      };

      this.apiService.addBookNew(book).subscribe({
        next:(res) => {
          if(res === 'inserted'){
            this.snackBar.open('Book Added Successfully', 'Ok')
          }
        }
      })
      this.newBook.reset();
    }
}
