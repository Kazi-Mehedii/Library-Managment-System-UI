import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User, UserType, AccountStatus, Book, Order, BookCategory } from '../../../model/models';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  static isLoggedIn() {
    throw new Error('Method not implemented.');
  }

  baseUrl_auth: string = "https://localhost:7134/api/Auth/";
  baseUrl_book: string = "https://localhost:7134/api/Book/";
  baseUrl_Order: string = "https://localhost:7134/api/Order/";
  //for navigate the side nave property
  userStatus: Subject<string> = new Subject();


  constructor(private http: HttpClient, private jwt: JwtHelperService) { }


  register(user: any) {
    return this.http.post(this.baseUrl_auth + 'Register', user, {
      responseType: 'text',
    })
  }

  login(logins: any) {
    let params = new HttpParams()
      .append('email', logins.email).append('password', logins.password);

    return this.http.get(this.baseUrl_auth + 'Login', {
      params: params,
      responseType: 'text'
    });
  }

  isLoggedIn(): boolean {
    if (localStorage.getItem('access_token') != null && !this.jwt.isTokenExpired())
      return true;
    return false;
  }
  //for encoding and decoding jwt token
  getUserInfo(): User | null {
    if (!this.isLoggedIn()) return null;
    var decodedToken = this.jwt.decodeToken();
    var user: User = {
      id: decodedToken.id,
      firstName: decodedToken.firstName,
      lastName: decodedToken.lastName,
      email: decodedToken.email,
      mobileNumber: decodedToken.mobileNumber,
      userType: UserType[decodedToken.userType as keyof typeof UserType],
      // userType: decodedToken.UserType,
      accountStatus: decodedToken.accountStatus,
      createdOn: decodedToken.createdOn,
      password: '',

    };
    return user;
  }
  
  //for logout
  logout() {
    localStorage.removeItem("access_token");
    this.userStatus.next("loggedOff");

  }


  getBooks() {
    return this.http.get<Book[]>(this.baseUrl_book + 'GetBooks')
  }


  orderBook(book: Book) {
    let userId = this.getUserInfo()!.id
    let params = new HttpParams().append('userId', userId).append('bookId', book.id)
    return this.http.post(this.baseUrl_Order + "OrderBook", null, {
      params: params,
      responseType: 'text'
    })
  }
  
  getOrdersOfuser(userId: number) {
    let params = new HttpParams().append('userId', userId);
    return this.http.get<any>(this.baseUrl_Order + 'GetOrderOfUser',
      {
        params: params,
      }
    ).pipe(
      map((order) =>{
        let neworders = order.map((order:any) =>{
          let newOrder: Order = {
            id: order.id,
            userId: order.userId,
            userName: order.user.firstName + ' ' + order.user.lastName,
            bookId: order.bookId,
            bookTitle: order.book.title,
            orderDate: order.orderDate,
            returned: order.returned,
            returnDate: order.returnDate,
            finePaid: order.finePaid
          };
          return newOrder;
        });
        return neworders;
      })
    )
  }

  getFine(order: Order){
    let today = new Date();
    let orderDate = new Date(Date.parse(order.orderDate));
    orderDate.setDate(orderDate.getDate() + 10);
    if(orderDate.getTime() < today.getTime()){
      var diffrnc = today.getTime() - orderDate.getTime();
      let days = Math.floor(diffrnc / (1000 * 86400));
      return days * 50;
    }
    return 0;
  }

  addNewCategory(category:BookCategory){
    return this.http.post(this.baseUrl_book + 'AddCategory', category,{
      responseType:'text'
    });
  }

  getCategory(){
    return this.http.get<BookCategory[]>(this.baseUrl_book + 'GetCategory')
  }

  addBookNew(book: Book){
    return this.http.post(this.baseUrl_book + 'AddNewBook', book,{
      responseType: 'text'
    })
  }

  deleteBook(id: number){
    return this.http.delete(this.baseUrl_book + 'DeleteBook',{
      params: new HttpParams().append('id', id),
      responseType: 'text'
    })
  }

  returnBook(userId: string, bookId:string, fine: number){
    return this.http.get(this.baseUrl_Order + 'ReturnBook', {
      params: new HttpParams()
      .append('userId',userId)
      .append('bookId',bookId)
      .append('fine',fine),
      responseType: 'text'
    });
  }

  getUsers(){
    return this.http.get<User[]>(this.baseUrl_auth + 'GetUsers')
  }

  aprooveRequest(userId: number){
    return this.http.get(this.baseUrl_auth + 'ApproveRequest', {
      params: new HttpParams().append('userId', userId),
      responseType:'text'
    });
  }

  getOrders(){
    return this.http.get <any> (this.baseUrl_Order + 'GetOrders').pipe(
      map((order) => {
        let newOrders = order.map((order: any) => {
          let newOrder: Order = {
            id: order.id,
            userId: order.userId,
            userName: order.user.firstName + ' ' + order.user.lastName,
            bookId: order.bookId,
            bookTitle: order.book.title,
            orderDate: order.orderDate,
            returned: order.returned,
            returnDate: order.returnDate,
            finePaid: order.finePaid
          }
          return newOrder;
        }
      )
       return newOrders;
      }
    )
    )
  }

  sendEmail(){
    return this.http.get(this.baseUrl_auth + 'SendEamilForPendingReturn', {
      responseType:'text'
    });
  }

  blockUser(){
    return this.http.get(this.baseUrl_auth + 'BlockForFineOverDue',{
      responseType:'text'
    });
  }

  unblock(userId: number){
    return this.http.get(this.baseUrl_auth + 'UnblockUser', {
      params: new HttpParams().append('userId', userId),
      responseType: 'text'
    })
  }
  
}
