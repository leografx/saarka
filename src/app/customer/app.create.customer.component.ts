import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from './app.customer.interface';
import { ApiService } from '../services/api.service';

@Component({
	selector:'create-customer',
	templateUrl:'create-customer.html',
	providers:[ApiService],
	inputs:['staticModal']
})

export class CreateCustomerComponent {
	customer:ICustomer;
	error:string;
	staticModal;


	constructor(private apiService:ApiService,private router:Router){}


	updateData(e){
		this.customer = e;
	}

	createCustomer(){
		this.error = '';
		let data = this.customer;
		this.apiService.createCustomer(data).subscribe(res => this.staticModal.hide(),
			error=>this.error = 'Oops, something went terribly wrong customer might already exist!');

	}
}