import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './components/auth/register/register.component';

export const routes: Routes = [
    {path:'register', component:RegisterComponent},
    {path:"**", component:PagenotfoundComponent}
];
