import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData :any
  imagepath="http://localhost:8000/uploads/";
  constructor(private http:HttpCallsService,
    ) { }

  ngOnInit(): void {
    this.getUserDetails()
    
  }
  getUserDetails(){
    this.http.userData().subscribe(res=>{
      console.table(res)
     let response = JSON.stringify(res)
     let clearresp = JSON.parse(response)
      console.log(typeof(response))
     this.userData=clearresp
     
    })
  }
}
