import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    data:any;
  constructor(
    private http:HttpCallsService,
  ) { }

  ngOnInit(): void {
    
    this.getproductlist();
  }
  getproductlist(){
    this.http.Productlist().subscribe(res=>{
      this.data=res;
    });
  }

}
