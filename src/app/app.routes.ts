import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:"**", component:PagenotfoundComponent}
];
