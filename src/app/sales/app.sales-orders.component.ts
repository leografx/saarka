import { Component, Output } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from '../services/api.service';
import { ICustomer } from '../customer/app.customer.interface';
import { IShipping } from '../shipping/app.shipping.interface';
import * as moment from 'moment';
@Component({
	selector:'sales-orders',
	templateUrl:'sales-orders.html',
	styleUrls:['sales.css'],
	providers:[ApiService]
})

export class SalesOrdersComponent{
	items = [];
	data = {};
	newCustomerName;
	showDatepicker=false;
	customer:ICustomer;
	shipping:IShipping;
	customerSelected:ICustomer;
	collapseCustomer=false;
	collapseShipping=false;
	selectedFromList;
	dt;

	constructor(private apiService:ApiService, private router:Router){
		this.customer = { 
			name:'',
			contact:'',
			address:'',
			city:'',
			state:'',
			zip:'',
			phone:'',
			email:'',
			date:moment().format()
		}

		this.shipping = {
			client:'',
			attention:'',
			address:'',
			city:'',
			state:'',
			zipcode:'',
			ship_date:moment().add(5,'day').format('L')
		}

	}

	mySelectedProduct(e){
		this.items.push(e);
	}

	deleteItem(item){
		this.items.splice(this.items.indexOf(item),1)
	}

	onSubmit(){
		this.data['customer'] = this.customer
		this.data['customer']['date'] = moment(this.customer.date).format()
		this.data['items'] = this.items
		this.data['shipping'] = this.shipping
		this.data['shipping']['ship_date'] = moment(this.shipping.ship_date).format();
		console.log(this.data);
		this.apiService.postOrder(this.data);
		this.router.navigate(['sales']);
	}

	customerUpdate(e){
		this.customer = e
		console.log('from customerUpdate function:',this.customer)
	}

	shippingUpdate(e){
		this.shipping = e
	}

	selectedCustomer(customer){
		this.customer = customer;
		this.selectedFromList = customer.name
		console.log('from SelectedCustomer:',customer);
	}

	setShipping(){
		this.shipping = {
			client:this.customer.name,
			attention:this.customer.contact,
			address:this.customer.address,
			city:this.customer.city,
			state:this.customer.state,
			zipcode:this.customer.zip,
			ship_date:this.shipping.ship_date
		}
	}

	customerInput(customer){
		this.customer = customer;
		this.shipping = {
			client:'',
			attention:'',
			address:'',
			city:'',
			state:'',
			zipcode:'',
			ship_date:moment().add(5,'day').format('L')
		}
	}

	setShipDate(date){
		this.showDatepicker=false;
		this.shipping.ship_date = date;
	}
	
	setShowDatepicker(show){
		this.showDatepicker = show;
	}
}






























































