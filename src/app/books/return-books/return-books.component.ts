import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { APIService } from '../../Module/shared/servis/api.service';
import { Order } from '../../model/models';

@Component({
  selector: 'return-books',
  // standalone: true,
  // imports: [],
  templateUrl: './return-books.component.html',
  styleUrl: './return-books.component.scss'
})
export class ReturnBooksComponent {
  retrunBook: FormGroup;
  fineToPay: number | null = null;

  constructor(fb: FormBuilder, private snackBar: MatSnackBar, private apiService: APIService) {
    this.retrunBook = fb.group({
      userId: fb.control(null, [Validators.required]),
      bookId: fb.control(null, [Validators.required])
    })
  }

  getFine() {
    let userId = this.retrunBook.get('userId')?.value;
    let bookId = this.retrunBook.get('bookId')?.value;

    this.apiService.getOrdersOfuser(userId).subscribe({
      next: (res: Order[]) => {
        if (res.some((o) => !o.returned && o.bookId == bookId)) {
          let order: Order = res.filter((o) => o.bookId == bookId)[0];
          this.fineToPay = this.apiService.getFine(order);
        }
        else {
          this.snackBar.open(`User dont have Book With ID: ${bookId}`, 'Ok')
        }
      }
    });
  }

  returnBookfromUser(){
    let userId = this.retrunBook.get('userId')?.value;
    let bookId = this.retrunBook.get('bookId')?.value;

    this.apiService.returnBook(userId,bookId, this.fineToPay!).subscribe({
      next: (res) => {
        if(res === 'returned'){
          this.snackBar.open('Book Returned SuccessFully', 'Ok');
        }
        else{
          this.snackBar.open('Book has not returned', 'Ok');
        }
      }
    })
    this.retrunBook.reset();

  }



}
