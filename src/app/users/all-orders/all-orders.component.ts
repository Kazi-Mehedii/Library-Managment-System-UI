import { Component } from '@angular/core';
import { Order } from '../../model/models';
import { APIService } from '../../Module/shared/servis/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'all-orders',
  // standalone: true,
  // imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent {


  columnsForPendingReturns: string[] = [
    'orderId',
    'userIdFororders',
    'userNameforAllorders',
    'bookId',
    'bookTitle',
    'orderDate',
    'fineToPay'

  ];

  columnsForCompletedReturns: string[] = [
    'orderId',
    'userIdFororders',
    'userNameforAllorders',
    'bookId',
    'orderDate',
    'returnDate',
    'finePaid'
  ];

  showProgressBar: boolean = false;
  ordersWithPendingReturns: Order[] = [];
  ordersWithCompletedReturns: Order[] = [];
  // ordersWithFines: Order[] = [];

  constructor(private apiService: APIService, private snackBar: MatSnackBar) {
    apiService.getOrders().subscribe({
      next: (res: Order[]) => {
        this.ordersWithPendingReturns = res.filter((o) => !o.returned);
        this.ordersWithCompletedReturns = res.filter((o) => o.returned);
        // this.ordersWithFines = this.ordersWithPendingReturns.filter(o => o.finePaid>0);
      },
      error: (err) => {
        this.snackBar.open('No orders Found', 'Ok');
      }
    })
  }

  sendEmail() {
    this.showProgressBar = true;
    this.apiService.sendEmail().subscribe({
      next: (res) => {
        if (res === 'sent') {
          this.snackBar.open('Emails have been sent to student for Return Book.', 'Ok');
          this.showProgressBar = false;
        }
        else {
          this.snackBar.open('Emails have not been sent to student.', 'Ok')
          this.showProgressBar = false;
        }
      }
    })
  }

  blockUser() {
    this.showProgressBar = true;
    this.apiService.blockUser().subscribe({
      next: (res) => {
        if (res === 'blocked') {
          this.snackBar.open('Over Due Accounts Are Blocked', 'Ok');
          this.showProgressBar = false;
        }
        else{
         this.snackBar.open('not blocked', 'ok');
         this.showProgressBar = false;
        }
      }   

    })
  }

}
