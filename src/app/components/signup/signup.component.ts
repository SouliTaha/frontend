import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpCallsService } from 'src/app/services/http-calls.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form ={
    email:null,
    name:null,
    password:null,
    password_confirmation:null,
  };

  public error=[];

  constructor(private Http:HttpCallsService,
    private token :TokenService,
    private router:Router) { }
  

  onSubmit(){
    
    this.Http.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data){
    this.token.handle(data.access_token); //after storing the token 
    this.router.navigateByUrl('/profile'); //user redirect to profile
   }
   
  
  handleError(error: any){
    this.error= error.error.errors;
    }
    
  ngOnInit(): void {
  }
  

}
