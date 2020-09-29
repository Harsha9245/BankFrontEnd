import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/Customer';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {

  account: any = { };
  customer: any = { 
  account: this.account};
  details:any;
  customer1:any;

  constructor(private service:MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }

  AddAccount():void{
    console.log('data',this.customer);
   
    this.service.AddAccount((this.customer))
          .subscribe( data => {
            this.details=data;
            this.customer1=this.details;
            //console.log(this.customer1);
            //console.log(this.customer1.account.accountId);
           // console.log(this.customer.gender);
           // alert('Account created successfully');
          });
          alert('Account created successfully');
   }
  }   
