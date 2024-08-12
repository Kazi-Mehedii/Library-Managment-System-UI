import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Module/shared/shared.module';
import { BookStoreComponent } from './book-store/book-store.component';




@NgModule({
  declarations: [BookStoreComponent],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class BooksModule { }
