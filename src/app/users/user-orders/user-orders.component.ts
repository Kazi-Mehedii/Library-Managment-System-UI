import { Component } from '@angular/core';
import { Order } from '../../model/models';

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
    'fineToPay'
  ]

  pendingReturns: Order[] = [];
  completedReturns: Order[] = [];
}
