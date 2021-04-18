import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {

  constructor(private http:HttpClient) { }

  signup( data: { email: null; name: null; password: null; password_confirmation: null; }){
   return this.http.post('http://localhost:8000/api/signup', data)
  } 
  login(data: any){
    return   this.http.post('http://localhost:8000/api/login', data)
  }

  ResetPassword(data){
    return this.http.post('http://localhost:8000/api/ResetPassword', data)
  }
  changePassword(data){
    return this.http.post('http://localhost:8000/api/changepassword', data)
  }
  
}
