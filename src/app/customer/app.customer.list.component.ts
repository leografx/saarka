import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
	selector:'customer-list',
	templateUrl:'customer-list.html',
	providers:[ApiService]
})

export class CustomerListComponent implements OnInit{
	customers;
	isOn = [];
	customerModel='';
	customerSelected;
	
	constructor(private apiService:ApiService){}

	ngOnInit(){
		this.customers = this.apiService.getAll('customers');
	}

	selected(customer){
		this.customerSelected = customer;
		let index = this.customers.indexOf(customer);
		this.active(index);
	}

	active(index){
		this.isOn = [];
		this.isOn[index]='active';
	}
}