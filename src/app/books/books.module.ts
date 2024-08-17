import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Module/shared/shared.module';
import { BookStoreComponent } from './book-store/book-store.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReturnBooksComponent } from './return-books/return-books.component';




@NgModule({
  declarations: [BookStoreComponent,MaintenanceComponent,ReturnBooksComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
