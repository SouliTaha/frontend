import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
public form ={
  name:null,
  price:null,
  color:null,
}
  constructor() { }
onSubmit(){
  
}

  ngOnInit(): void {
  }

}
