import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/scan';

import { ICalendar, Calendar } from '../calendar/app.calendar.interface';
import { ApiService } from '../services/api.service';
import { PlannerService } from '../services/planner.service';
import * as moment from 'moment';
import { AuthService } from '../services/app.services.auth.service';

@Component({
	selector:'planner',
	templateUrl:'planner.html',
	providers:[ ApiService ],
	styles:[`
		.active{
			background:none;
			background-color:none;
		}

		.order-table{
			padding:15px;
		}
		.calendar-settings{
			padding-top: 20px;
		}
	`]

})

export class PlannerComponent{
	
	initDate;
	numOfDates:number = 30;
	numOfDatesBack:number = 7;
	product={id:null, on_hand:0.0,item_no:null,name:null,available:null};
	totalOrder = 0;
	items;
	itemOrders;
	dataForCal = [];
	calendar:ICalendar[] = [];
	pendingOrders;
	itemsCount=0;
	user;
	scheduled;
	accumulatorBalance = 0.0;


	constructor( 
		private apiService:ApiService, 
		private plannerService:PlannerService, 
		private authService : AuthService,
		private route: ActivatedRoute,
  		private router: Router,){
		this.user = this.authService.getUser();
	}

	ngOnInit(){
		this.route.params
		.filter(param => param['id'])
		.switchMap(( param : Params ) => this.apiService.getProductWithId(+param['id']))
		.subscribe(res => this.getItems(res.json()),error => console.log("no data set"));	
	}

	getItems(product){
		//this.product.on_hand = parseFloat(product.inventory_quantity);
		this.router.navigate(['/planner',product.id]);
		//console.log("product: ",product)
		this.itemsCount = 0;
		this.calendar = []; // empty calendar
		this.product = { id:null, on_hand:0.0,item_no:null,name:null,available:null };
		
		this.product = product; // product selected

		//this.apiService.getScheduled(product.id).map(peek => console.log('peek Schedule',peek)).subscribe(data => this.scheduled = data);

		this.apiService.getItems( product ).subscribe(
			
			res => { 

				// response items
				this.items = res.data;  // fetch product with item id
				this.scheduled = res.schedule;
				//console.log('schedule',res.schedule);
				this.itemsCount++;

			},
			
			error=> {
				
				//error 
				console.log(error);
					
			},
			
			()=> { 
				
				// complete 
				
				
				this.initDate = moment().subtract(this.numOfDatesBack,'days'); // initial date back 20 days
				//console.log("initDate = ", this.initDate)
				

				for ( let i = 0; i < this.numOfDates; i++ ) { // loop to create 55 days from initDate

					/* 
						initialize calandar with 0 values 
					*/
					this.calendar.push( new Calendar( this.initDate.add(1,"day").format() , 0 , 0 , 0 , 0 ) );

				}
				this.populateCalendarWithData();
				this.accumulatorResetBalance();	
				this.balanceByDate();
				this.reBalancePlanned();
				this.balanceTotal();	
			});

	}

	accumulatorResetBalance(){
		this.accumulatorBalance = 0.00;
	}

	reBalancePlanned(){
		this.calendar.map( (data,i,obj ) => { 
			if( data.scheduled){
				data.planned = 0.00;			
			}
		});
	}
	
	balanceTotal(){
		let balance = parseFloat(this.product.on_hand.toString());
		this.calendar
		.map(data => {
			balance += parseFloat(data.scheduled) || 0.00
			balance += parseFloat(data.planned) || 0.00
			balance -= parseFloat(data.committed) || 0.00
			data.balance = balance;
		});
	}

	balanceByDate(){
		this.calendar
		.map(data => { 
			data.planned = ( parseFloat(data.planned) > parseFloat(data.scheduled) )? data.planned - this.accumulatorBalance : 0.00;
			this.accumulatorBalance += parseFloat(data.balance);
			this.accumulatorBalance += ( parseFloat(data.scheduled) )? parseFloat(data.scheduled): parseFloat(data.planned);
			this.accumulatorBalance -= parseFloat(data.committed);
			data.balance = this.accumulatorBalance;
			return data;
		});
	}

	populateCalendarWithData(){
		this.calendar[0].balance = this.product.on_hand; 
		
		this.calendar.map(data => { 
			this.scheduled
				.filter( schedule => moment(data.date).format("L") === moment(schedule.date).format("L") )
				.map( schedule => data.scheduled = parseFloat(schedule.total) )
			
			this.items
				.filter( item => moment(data.date).format("L") === moment(item.planned_date).format("L") )
				.map( item => data.planned = item.quantity);
			
			this.items.filter(item =>  moment(data.date).format("L") === moment(item.order_ship_date).format("L") )
				.map( item => data.committed = item.quantity )

			return data;
		});
	}

	getPendingOrders(){
		this.apiService.getPendingOrders().subscribe(data => this.pendingOrders = data);
	}

	getPendingItems(){
		this.apiService.getPendingItems().subscribe(data => this.itemOrders = data);
	}
}


			


		















































































































