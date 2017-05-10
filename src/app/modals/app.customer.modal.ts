import { Component, OnInit} from '@angular/core';

@Component({
	selector:'customer-modal',
	templateUrl:'customer-modal.html',
	inputs:['customerSelected','newCustomer']
})

export class CustomerModalComponent implements OnInit{
	customerSelected;
	newCustomer;	

	ngOnInit(){
		this.customerSelected = { 
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
		console.log('modal:',this.customerSelected);
	}


}