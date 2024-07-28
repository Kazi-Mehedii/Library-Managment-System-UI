import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageheaderComponent } from '../../components/shared/pageheader/pageheader.component';



@NgModule({
  declarations: [PageheaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    CommonModule,
    MaterialModule,
    PageheaderComponent
  ]
})
export class SharedModule { }
