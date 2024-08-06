import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User, UserType, AccountStatus } from '../../../model/models';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  static isLoggedIn() {
    throw new Error('Method not implemented.');
  }

  baseUrl_auth: string = "https://localhost:7134/api/Auth/";

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
  getUserInfo() : User | null{
      if (!this.isLoggedIn()) return null;
      var decodedToken = this.jwt.decodeToken();
      var user : User = {
        id: decodedToken.id,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
        email: decodedToken.email,
        mobile: decodedToken.mobile,
        userType: UserType[decodedToken.userType as keyof typeof UserType],
        accountStatus: decodedToken.accountStatus,
        createdOn: decodedToken.createdOn,
        password: '',

      };
      return user;
  }
//for logout
  logout(){
    localStorage.removeItem("access_token");
    this.userStatus.next("loggedOff");

}
}
