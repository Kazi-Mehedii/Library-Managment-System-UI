import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Module/shared/shared.module';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [UserOrdersComponent,ProfileComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
