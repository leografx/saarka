import { Component, EventEmitter } from '@angular/core';
import { ICustomer } from './app.customer.interface';
import { ApiService } from '../services/api.service';

@Component({
	selector:'customer-picker',
	templateUrl:'customer-picker.html',
	providers:[ApiService],
	outputs:['customerSelected','customerInput'],
	styles:[`
		.customer-picker{
			width:50%;
			position:absolute;
			z-index: 1001;
		}
	`]
})

export class CustomerPickerComponent{
	customerSelected:EventEmitter<ICustomer> = new EventEmitter<ICustomer>();
	customerInput:EventEmitter<ICustomer> = new EventEmitter<ICustomer>();
	customers:ICustomer;
	customer:ICustomer;
	customerModel='';
	showCustomers=false;

	constructor(private apiService:ApiService){
		this.customerList();
	}

	customerList(){
		this.apiService.getAll('customers').subscribe(res=>this.customers=res);
	}

	selectedCustomer(customer){
		this.customerSelected.emit(customer);
		this.customer = customer;
		this.showCustomers=false;
	}
	
	inputCustomer(){
		console.log('from Customer Picker',this.customerModel);
		let customerName = this.customerModel;
		this.customerInput.emit( { 
			name:customerName,
			email:'',
			contact:'',
			phone:'',
			address:'',
			city:'',
			state:'',
			zip:'',
			date:''
		} );
	}
}