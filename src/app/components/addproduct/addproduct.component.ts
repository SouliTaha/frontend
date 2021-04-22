import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  userData :any
  
  public form = {
    name:null,
    price:null,
    color:null,
  }
  constructor(
    private http:HttpCallsService,

    
  ) 
  { }
  
  onSubmit(){
  this.http.addproduct(this.form).subscribe(
    data => this.handleResponse(data)
    );
}

handleResponse(res){
  console.log(res)
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
 getuserid(){
  let id = this.userData.token.id;
   return id ;
}


  ngOnInit(): void {
    this.getUserDetails()
   
  }

}



