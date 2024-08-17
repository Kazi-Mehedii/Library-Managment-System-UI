import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageheaderComponent } from '../../components/shared/pageheader/pageheader.component';
import { PagefooterComponent } from '../../components/shared/pagefooter/pagefooter.component';
import { PagesidenavComponent } from '../../components/shared/pagesidenav/pagesidenav.component';
import { RouterLink, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from '../../components/shared/pagenotfound/pagenotfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageTableComponent } from '../../components/shared/page-table/page-table.component';


@NgModule({
  declarations: [PageheaderComponent,PagefooterComponent,PagesidenavComponent,PagenotfoundComponent,PageTableComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    MaterialModule,
    PageheaderComponent,
    PagefooterComponent,
    PagesidenavComponent,
    RouterModule,
    PagenotfoundComponent,
    ReactiveFormsModule,
    HttpClientModule,
    PageTableComponent
  ]
})
export class SharedModule { }
