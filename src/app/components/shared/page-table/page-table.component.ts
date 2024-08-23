import { Component, EventEmitter, Input,  Output } from '@angular/core';
import { User, Order, AccountStatus } from '../../../model/models';
import { APIService } from '../../../Module/shared/servis/api.service';

@Component({
  selector: 'page-table',
  templateUrl: './page-table.component.html',
  styleUrl: './page-table.component.scss'
})
export class PageTableComponent {

  constructor(private apiService: APIService){

  }

  @Input()
  columns: string[] = [];

  @Input()
  datasource: any[] = [];

  @Output()
  approve = new EventEmitter<User>();

  @Output()
  unblock = new EventEmitter<User>();

  getFineTopay(order: Order){
    return this.apiService.getFine(order)
  }

  //for change enum index no to string
  getAccountstatus(input: AccountStatus){
    return AccountStatus[input];
  }
  
}
