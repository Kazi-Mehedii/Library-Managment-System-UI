import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Module/shared/shared.module';
import { BookStoreComponent } from './book-store/book-store.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';



@NgModule({
  declarations: [BookStoreComponent,UserOrdersComponent],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class BooksModule { }
