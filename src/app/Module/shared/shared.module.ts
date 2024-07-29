import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageheaderComponent } from '../../components/shared/pageheader/pageheader.component';
import { PagefooterComponent } from '../../components/shared/pagefooter/pagefooter.component';
import { PagesidenavComponent } from '../../components/shared/pagesidenav/pagesidenav.component';
import { RouterLink, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from '../../components/shared/pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PageheaderComponent,PagefooterComponent,PagesidenavComponent,PagenotfoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    MaterialModule,
    PageheaderComponent,
    PagefooterComponent,
    PagesidenavComponent,
    RouterModule,
    PagenotfoundComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
