import { Component, OnInit } from '@angular/core';
import {  SnotifyService } from 'ng-snotify';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-res-reset',
  templateUrl: './res-reset.component.html',
  styleUrls: ['./res-reset.component.css']
})
export class ResResetComponent implements OnInit {
  
  public form = {
    email : null
  }
  constructor(private Http:HttpCallsService,
    private notify : SnotifyService,
    private Nottify:SnotifyService
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.Nottify.info('wait...',{timeout:6000})
    this.Http.ResetPassword(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.notify.error(error.error.error)
    );
  }
  handleResponse(res){
this.Nottify.success(res.data,{timeout:4000})
    this.form.email = null;
  }

}
