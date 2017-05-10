import { Component, EventEmitter } from '@angular/core';
import { IShipping } from './app.shipping.interface'
import { ICustomer } from '../customer/app.customer.interface'
import * as moment from 'moment'

@Component({
	selector:'shipping',
	templateUrl:'shipping.html',
	outputs:['updateShipping'],
	styleUrls:['shipping.css'],
	inputs:['shipping','ship_date']
})

export class ShippingComponent {
	updateShipping = new EventEmitter<IShipping>()
	shipping:IShipping;
	customer:ICustomer;
	
	constructor(){}

	shippingUpdate(){
		this.updateShipping.emit(this.shipping)
	}

	
}