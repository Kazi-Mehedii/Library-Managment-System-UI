import { Component } from '@angular/core';
import { Order } from '../../model/models';
import { APIService } from '../../Module/shared/servis/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'user-orders',
  templateUrl: './user-orders.component.html',
  styleUrl: './user-orders.component.scss'
})
export class UserOrdersComponent {
  columnsForPendingReturns : string[] = [
    'orderId',
    'bookId',
    'bookTitle',
    'orderDate',
    'fineToPay'
  ];
  columnsForCompletedReturns: string[] = [
    'orderId',
    'bookId',
    'bookTitle',
    'orderDate',
    'returnDate',
    'finePaid'
  ]

  pendingReturns: Order[] = [];
  completedReturns: Order[] = [];


  constructor(private apiService:APIService, private snackbar:MatSnackBar){
    let userId = this.apiService.getUserInfo()!.id;
    apiService.getOrdersOfuser(userId).subscribe({
       next:(res : Order[]) => {
        // console.log(res);   
        this.pendingReturns = res.filter((o) => !o.returned);
        this.completedReturns = res.filter((o)=> o.returned);    
       }
    });
  }

  getFineTopay(order: Order){
    return this.apiService.getFine(order);
  }
}
