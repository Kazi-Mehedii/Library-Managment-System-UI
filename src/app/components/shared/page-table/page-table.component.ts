import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { User } from '../../../model/models';

@Component({
  selector: 'page-table',
  templateUrl: './page-table.component.html',
  styleUrl: './page-table.component.scss'
})
export class PageTableComponent {
  @Input()
  columns: string[] = [];

  @Input()
  datasource: any[] = [];

  @Output()
  approve = new EventEmitter<User>();

  
}
