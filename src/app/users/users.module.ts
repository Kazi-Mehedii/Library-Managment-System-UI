import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Module/shared/shared.module';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { ProfileComponent } from './profile/profile.component';
import { ApprovalRequestComponent } from './approval-request/approval-request.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { AllUsersComponent } from './all-users/all-users.component';



@NgModule({
  declarations: [UserOrdersComponent,ProfileComponent,ApprovalRequestComponent,AllOrdersComponent,AllUsersComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UsersModule { }
