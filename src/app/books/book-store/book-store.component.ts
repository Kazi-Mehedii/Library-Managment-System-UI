import { Component } from '@angular/core';
import { Book, BookByCategory, BookCategory } from '../../model/models';
import { APIService } from '../../Module/shared/servis/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'book-store',
  templateUrl: './book-store.component.html',
  styleUrl: './book-store.component.scss'
})
export class BookStoreComponent {
  displayedColumn: string[] = [
    'id',
    'title',
    'author',
    'price',
    'available',
    'order'
  ];
  books: Book[] = [];
  booksToDisplay: BookByCategory[] = [
    // {
    //   bookCatagoryId: 1,
    //   category: 'C',
    //   subCategory:'S',
    //   books:[
    //     {
    //       id:1,
    //       title:'T',
    //       author:'A',
    //       price:100,
    //       ordered:false,
    //       bookCategoryId:1,
    //       bookCategory:{id:1, category: '', subCategory: ''},
    //     },
    //   ],
    // },
  ];


  constructor(private apiService: APIService, private snackBar: MatSnackBar) {
    apiService.getBooks().subscribe({
      next: (res: Book[]) => {

        // console.log(res)

        this.books = [];
        res.forEach((b) => this.books.push(b));

        this.updateList();
      }
    });
  }

//for retriving data from api
  updateList() {
    this.booksToDisplay = [];
    for (let book of this.books) {
      let categoryExist = false;
      let categoryBook: BookByCategory | null
      for (let bookToDisplay of this.booksToDisplay) {
        if (bookToDisplay.bookCatagoryId == book.bookCategoryId) {
          categoryExist = true;
          categoryBook = bookToDisplay;
        }
      }

      //if null then push
      if (categoryExist) {
        categoryBook!.books.push(book)
      }
      else {
        this.booksToDisplay.push({
          bookCatagoryId: book.bookCategoryId,
          category: book.bookCategory.category,
          subCategory: book.bookCategory.subCategory,
          books: [book],

        });
      }
    }

    // console.log(this.booksToDisplay)
  }

//search data use title
  searchBooks(value:string){
    //first retrive data from api
    this.updateList();

    //for matching value
    value = value.toLowerCase();
    this.booksToDisplay = this.booksToDisplay.filter((bookToDisplay) => {
      bookToDisplay.books = bookToDisplay.books.filter((book) => {
        return book.title.toLowerCase().includes(value);
      });
      return bookToDisplay.books.length > 0;
    });
   }

   getBookCount(){
    let count = 0;
    this.booksToDisplay.forEach((b) => (count += b.books.length));
    return count;
   }
  
   orderBook(book: Book){

    this.apiService.orderBook(book).subscribe({
      next:(res) => {
        if (res == 'Ordered') {
          book.ordered = true;
          let today = new Date();
          let returnDate = new Date();
          returnDate.setDate(today.getDate() + 10);

          this.snackBar.open(
            book.title + 'has been ordered. You will have to return on' + returnDate.toDateString(), 'Ok'
          );
        }
        else{
          this.snackBar.open(
            'You All ready have 3 Orders pending to retrun.', 'Ok'
          )
        }
      }
    })



   }



}


