import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
