import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
public form ={
  name:null,
  image:null
}
  constructor() { }

  ngOnInit(): void {
  }
onSubmit(){
  
}
}
