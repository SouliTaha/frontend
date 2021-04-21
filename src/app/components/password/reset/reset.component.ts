import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  public error =[];
 public form ={
   email : null,
   password :null,
   password_confirmation : null ,
   resetToken:null
 }
  constructor(
    private route:ActivatedRoute,
    private http:HttpCallsService,
    private router:Router) {
    this.route.queryParams.subscribe(params=>{
      this.form.resetToken=params['token']
    });
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.http.changePassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(Error)
    )
  }
  handleResponse(data){
    this.router.navigateByUrl('/login');    
  }
  handleError(error){
this.error=error.error.errors;
  }

}
