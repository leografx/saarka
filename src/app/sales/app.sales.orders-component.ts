import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import  * as moment from 'moment';
import { Order } from "app/@schema/order";
import { Item } from "app/@schema/item";
import { Customer } from "app/@schema/customer";


@Component({
	selector:'sales-order',
	templateUrl:'sales-orders.html',
	styles:[`
		.fa{
			position:absolute;
			right:10px;
			top:15px;
			color:red;
		}
	`],
	providers:[ApiService]
})

export class SalesOrdersComponent implements OnInit{
	id:number;
	order 		: Order = new Order();
	customer	: Customer;
	items		: Item[] = [];
	nameCount:number;
	today = moment();
	typeahead = { name:'customers', field:'name', show : false , filter:'' };
	
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
			let customer = new Customer({
				name:		this.order.name,
				email:		this.order.email,
				contact:	this.order.contact,
				address:	this.order.address,
				city:		this.order.city,
				state:		this.order.state,
				zip:		this.order.zip,
				phone:		this.order.phone,
				date:		this.order.date
			});
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















