import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpCallsService } from 'src/app/services/http-calls.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public form ={
  email:null,
  password:null
}
public error = null ;

  constructor(
    private Http:HttpCallsService,
    private token :TokenService,
    private router:Router,
    private auth:AuthService) { }

onSubmit(){
  this.Http.login(this.form).subscribe(
  data => this.handleResponse(data),
  error => this.handleError(error)
);
}

handleResponse(data){
 this.token.handle(data.access_token); //after storing the token 
 this.auth.changeAuthStatus(true);
 this.router.navigateByUrl('/profile'); //user redirect to profile

}

handleError(error: any){
this.error= error.error.error;
}

  ngOnInit(): void {
  }

}
