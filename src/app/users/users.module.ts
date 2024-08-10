import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Module/shared/shared.module';
import { UserOrdersComponent } from './user-orders/user-orders.component';



@NgModule({
  declarations: [UserOrdersComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
