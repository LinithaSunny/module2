import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  customer: Customer = new Customer();
  constructor(){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  mySubmit(regForm: any){
    console.log("form submitted",regForm);
  
  }
  

}
