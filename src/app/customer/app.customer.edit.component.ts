import { Component } from '@angular/core';
import { ICustomer } from './app.customer.interface';
import { ApiService } from '../services/api.service'

@Component({
	selector:'edit-customer',
	templateUrl:'edit-customer.html',
	inputs:['customer'],
	providers:[ApiService]
})

export class EditCustomerComponent{
	customer:ICustomer;
	customerSelected;

	constructor(private apiService:ApiService){
		this.customer = { 
			name:'',
			contact:'',
			address:'',
			city:'',
			state:'',
			zip:'',
			phone:'',
			email:'',
			date:Date()
		}
	}

	updateCustomer(customer){
		this.apiService.UpdateCustomer(customer).subscribe(res=>console.log(res),error=> console.log(error));
		console.log(customer);
	}
}