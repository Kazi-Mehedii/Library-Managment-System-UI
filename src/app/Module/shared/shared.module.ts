import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageheaderComponent } from '../../components/shared/pageheader/pageheader.component';
import { PagefooterComponent } from '../../components/shared/pagefooter/pagefooter.component';



@NgModule({
  declarations: [PageheaderComponent,PagefooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    CommonModule,
    MaterialModule,
    PageheaderComponent,
    PagefooterComponent
  ]
})
export class SharedModule { }
