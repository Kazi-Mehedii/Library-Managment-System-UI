import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  baseUrl_auth: string = "https://localhost:7134/api/Auth/";
  constructor(private http:HttpClient) { }


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
}
