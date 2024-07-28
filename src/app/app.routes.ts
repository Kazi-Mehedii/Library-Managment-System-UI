import { Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/shared/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path:"**", component:PagenotfoundComponent}
];
