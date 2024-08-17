import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BookStoreComponent } from './books/book-store/book-store.component';
import { UserOrdersComponent } from './users/user-orders/user-orders.component';
import { ProfileComponent } from './users/profile/profile.component';
import { MaintenanceComponent } from './books/maintenance/maintenance.component';
import { ReturnBooksComponent } from './books/return-books/return-books.component';
import { ApprovalRequestComponent } from './users/approval-request/approval-request.component';


export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'home',component:BookStoreComponent},
    {path:'my-orders',component:UserOrdersComponent},
    {path:'maintenance',component:MaintenanceComponent},
    {path: 'return-book',component:ReturnBooksComponent},
    {path: 'aprooval-request',component:ApprovalRequestComponent},
    {path:'profile', component:ProfileComponent},
    {path:"**", component:PagenotfoundComponent}
];
