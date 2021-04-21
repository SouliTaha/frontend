import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';



@Injectable({
  providedIn: 'root'
})
export class HttpCallsService {


  constructor(private http:HttpClient,
    private Token:TokenService,
  
) { }
  signup( data: { email: null; name: null; password: null; password_confirmation: null; }){
   return this.http.post('http://localhost:8000/api/signup', data)
  } 
  login(data: any){
    return   this.http.post('http://localhost:8000/api/login', data)
  }
  
  userData(){
   let Tkn = this.Token.get();
    return this.http.get('http://localhost:8000/api/profile',  {
        // Send the authentication token here 
        headers: {
            'Authorization': 'Bearer ' + Tkn
        }
    });
  }

  ResetPassword(data){
    return this.http.post('http://localhost:8000/api/ResetPassword', data)
  }
  changePassword(data){
    return this.http.post('http://localhost:8000/api/changepassword', data)
  }
  Productlist(){
    return this.http.get('http://localhost:8000/api/productlist');
  }
  
}
