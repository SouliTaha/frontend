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
    let Tkn = this.Token.get();
    return this.http.get('http://localhost:8000/api/productlist',
    {
      // Send the authentication token here 
      headers: {
        'Authorization': 'Bearer ' + Tkn
    }
    });
  }
  
  addproduct(data){
    let Tkn = this.Token.get();
    return this.http.post('http://localhost:8000/api/add', data , {
      // Send the authentication token here 
      headers: {
        'Authorization': 'Bearer ' + Tkn
    }
     });
  }
  
  deleteProduct(id){
    let Tkn = this.Token.get();
    return this.http.delete('http://localhost:8000/api/delete/'+id,
    {
      // Send the authentication token here 
      headers: {
        'Authorization': 'Bearer ' + Tkn
    }
  });
}
  getProductById(id){
    let Tkn = this.Token.get();
    return this.http.get('http://localhost:8000/api/product/'+id,
    {
      // Send the authentication token here 
      headers: {
        'Authorization': 'Bearer ' + Tkn
    }}
    );
  }
  updateProduct(id , data){
    let Tkn = this.Token.get();
    return this.http.put('http://localhost:8000/api/edit/'+id, data , {
      // Send the authentication token here 
      headers: {
        'Authorization': 'Bearer ' + Tkn
    }
     });
  }
  getUserById(id){
    let Tkn = this.Token.get();
    return this.http.get('http://localhost:8000/api/user/'+id,
    {
      // Send the authentication token here 
      headers: {
        'Authorization': 'Bearer ' + Tkn
    }}
    );
  }
  updateUser(id,data){
    let Tkn = this.Token.get();
    return this.http.put('http://localhost:8000/api/editUser/'+id, data , {
      // Send the authentication token here 
      headers: {
        'Authorization': 'Bearer ' + Tkn
    }
     });
  }
  

}

