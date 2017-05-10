import { Component, EventEmitter} from '@angular/core';
import { ICustomer } from './app.customer.interface'

@Component({
	selector:'customer',
	templateUrl:'customer.html',
	outputs:['updateCustomer'],
	inputs:['customer']
})

export class CustomerComponent{
	updateCustomer = new EventEmitter<ICustomer>();
	customer:ICustomer;
	customerSelected;
	showDateDatepicker;

	constructor(){
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
	
	customerData(){
		this.updateCustomer.emit(this.customer);
	}
}