import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import  * as moment from 'moment';

@Component({
	selector:'sales-order',
	templateUrl:'sales-orders.html',
	styles:[`.fa{
		position:absolute;
		right:10px;
		top:15px;
		color:red;
	}`],
	providers:[ApiService]
})

export class SalesOrdersComponent implements OnInit{
	typeahead = { name:'customers', field:'name', show : false , filter:'' };
	id:number;
	nameCount:number;
	today = moment();
	customer	: Customer;
	items		: Items[] = [];
	order 		: Order = new Order();
	
	constructor( private apiService:ApiService,private activeRoute:ActivatedRoute, private router:Router ){}

	ngOnInit(){
		this.activeRoute.params.subscribe(params => {
			this.id = +params['id'];
			if(this.id){
				this.apiService.getOrderWithId(this.id).subscribe(data => {
					//console.log(data);
					this.order = data;
					this.order.date = moment(data.date).format('L');
					this.order.ship_date = moment(data.ship_date).format('L');
					this.items = data.items;
				});	
			}else{
				// Means is a new order  set init options values here.
				this.order.date = moment().format('L');
				this.order.ship_date = moment().add(12,"days").format('L');
			}
		});
	}

	transformDate(order){
		order.date = moment(order.date).format('L');
		order.ship_date = moment(order.ship_date).format('L');
	}

	transformName(order){
		if(order.name.length > 2)
			order.name = order.name[0].toUpperCase()+order.name.slice(1);
	}

	updateOrder(order){
		order.date = moment(order.date);
		order.ship_date = moment(order.ship_date);
		this.apiService.updateOrderWithId(order).subscribe();
		this.router.navigate(['/order']);
	}

	saveOrder(order){
		order.date = moment(order.date);
		order.ship_date = moment(order.ship_date);
		order.customer = this.customer;
		order.status = 'Active';

		console.log(this.order);
		this.apiService.saveOrder(order).subscribe();
		this.router.navigate(['/order']);
	}

	selectedProduct(product){
		this.items.push(product);
		
		this.items.map( ( data, i ) => {
			data.customer_id  = this.order.customer_id
			data.shipping_client = this.order.contact
			data.shipping_address = this.order.shipping_address
			data.shipping_city = this.order.shipping_city
			data.shipping_attention = ''
			data.shipping_state = this.order.shipping_state
			data.shipping_zip = this.order.shipping_zip	
		});	
	}

	deleteItem(i){
		this.items.splice(i,1);
		//console.log(i)
	}

	typeaheadselectedItem(e){
		let newData = { 
			ship_date:this.order.ship_date,
			date:this.order.date,
			name: e.name,
			customer_id:e.id,
			email: e.email,
			contact: e.contact,
			address: e.address,
			city:e.city,
			state: e.state,
			zip: e.zip,
			phone:e.phone,
			shipping_address:'',
			shipping_city:'',
			shipping_state:'',
			shipping_zip:'',
			items:this.items,
			status:''
		}
		this.order = newData;
	}

	typeaheadShow(){
		this.typeahead.filter = this.order.name;
		this.typeahead.show = true;
	}

	filterCount(e){
		this.nameCount = e;

		if (this.order.customer_id!=null){
			this.customer = {}
		}

		if(e==0){
			this.order.customer_id = null;
			let customer = new Customer(
					this.order.name,
					this.order.email,
					this.order.contact,
					this.order.address,
					this.order.city,
					this.order.state,
					this.order.zip,
					this.order.phone,
					this.order.date
				);
			this.customer = customer;
		}
	}

	reset(){
		this.order = {
			ship_date:this.order.ship_date,
			name:this.order.name,
			email:'',
			customer_id:undefined,
			contact:'',
			shipping_address:'',
			shipping_city:'',
			shipping_state:'',
			shipping_zip:'',
			address:'',
			city:'',
			state:'',
			zip:'',
			date:this.order.date,
			phone:'',
			status:''	
		}
	}
}

export class Customer {
	id? : string;
	name? : string;
	email? : string;
	contact? : string;
	address? : string;
	city? : string;
	state? : string;
	zip? : string;
	phone? : string;
	date? : string;

	constructor( name, email, contact, address, city, state, zip, phone, date ){
		this.name = name;
		this.email = email;
		this.contact = contact;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.phone = phone;
		this.date = date;
	}
}

export class Order{
	id?:number;
	ship_date?:string;
	name:string;
	email:string;
	customer_id:number;
	contact:string;
	shipping_address:string;
	shipping_city:string;
	shipping_state:string;
	shipping_zip:string;
	address:string;
	city:string;
	state:string;
	zip:string;
	date?:string;
	phone:string;
	status:string;
}

export class Items{
	id?:number;
	product_id:number;
	customer_id:number;
	order_id:number;
	item_no:string;
	name:string;
	description?:string;
	case:string;
	category:string;
	status:string;
	size:string;
	cut_score:string;
	par:number;
	on_hand:number;
	qa_hold:number;
	available:number;
	quantity:number;
	order_date:string;
	order_ship_date:string;
	order_name:string;
	order_email:string;
	order_address:string;
	order_city:string;
	order_state:string;
	order_zip:string;
	order_phone:string;
	shipping_client:string;
	shipping_address:string;
	shipping_city:string;
	shipping_attention:string;
	shipping_state:string;
	shipping_zip:string;
	inventory_quantity:number;
	inventory_size:string;
	inventory_weight:number;
	inventory_weight_unit:string;
	inventory_location:string;	
}















