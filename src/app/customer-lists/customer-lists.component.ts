import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-lists',
  templateUrl: './customer-lists.component.html',
  styleUrls: ['./customer-lists.component.scss']
})
export class CustomerListsComponent implements OnInit {
  @Input() customers:string[] = [];

  input:string = "";
  isValid:boolean = false;


  constructor() { }

  addCustomer () {
    if(this.input !== "") {
      this.customers.push(this.input);
      this.input = "";
    }

  }

  ngOnInit(): void {
  }

}
