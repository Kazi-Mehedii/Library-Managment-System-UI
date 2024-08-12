import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BookStoreComponent } from './books/book-store/book-store.component';
import { UserOrdersComponent } from './users/user-orders/user-orders.component';
import { ProfileComponent } from './users/profile/profile.component';
import { MaintenanceComponent } from './books/maintenance/maintenance.component';


export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'home',component:BookStoreComponent},
    {path:'my-orders',component:UserOrdersComponent},
    {path:'maintenance',component:MaintenanceComponent},
    {path:'profile', component:ProfileComponent},
    {path:"**", component:PagenotfoundComponent}
];
