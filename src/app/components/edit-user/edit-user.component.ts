import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
id:any;
userData:any;

  public form ={
  name:null,
  email:null,
  
}
  constructor(
    private route:ActivatedRoute,
    private http:HttpCallsService
    ) { }

  ngOnInit(): void {
this.id=this.route.snapshot.params.id;
this.getData();
  }
getData(){
  this.http.getUserById(this.id).subscribe(res=>{
    this.userData = res; 
    this.form = this.userData
  })
}
updateUser(){
  this.http.updateUser(this.id,this.form).subscribe(res =>{
  })
}
}
