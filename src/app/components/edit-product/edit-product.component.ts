import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HttpCallsService } from 'src/app/services/http-calls.service';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id:any;
  productData:any;

  public form = {
    name:null,
    price:null,
    color:null,
  }
  constructor(
    private route:ActivatedRoute,
    private http:HttpCallsService
    ) { }

    

  ngOnInit(): void {
  //console.log(this.route.snapshot.params.id);
  this.id = this.route.snapshot.params.id;
  this.getData()
  }
  getData(){
    this.http.getProductById(this.id).subscribe( res =>{
      this.productData = res;
      this.form= this.productData
    })
  }
  updateProduct(){
    this.http.updateProduct(this.id ,this.form ).subscribe(res=>{

    })
  }
}
