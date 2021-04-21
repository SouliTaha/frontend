import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private loggedIn = new BehaviorSubject < boolean > (this.Token.loggedIn());

authStatus = this.loggedIn.asObservable(); //when the loggedIn changes the authstatus will change

changeAuthStatus (value : boolean){
  this.loggedIn.next(value);
}

constructor(private Token:TokenService,
) { }

}
