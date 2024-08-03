import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseUrl_auth: string = "https://localhost:7134/api/Auth/";

  //for navigate the side nave property
  userStatus: Subject<string> = new Subject();


  constructor(private http:HttpClient, private jwt: JwtHelperService) { }


  register(user: any){
   return this.http.post(this.baseUrl_auth + 'Register', user,{
      responseType: 'text',
    })
  }

  login(logins: any){
      let params = new HttpParams()
      .append('email',logins.email).append('password',logins.password);

      return this.http.get(this.baseUrl_auth+'Login',{
        params:params,
        responseType:'text'
      });
  }

  isLoggedIn(): boolean{
    if ( localStorage.getItem('access_token') != null ^^ this) {
      
    }
  }
}
