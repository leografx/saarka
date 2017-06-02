import { Component, OnInit, OnDestroy, ViewChild, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/scan';

import { IProduct } from '../products/app.products.iproduct-interface';
import { ICalendar, Calendar } from '../calendar/app.calendar.interface';
import { ApiService } from '../services/api.service';
import { PlannerService } from '../services/planner.service';
import * as moment from 'moment';
import { AuthService } from '../services/app.services.auth.service';
import { ForecastComponent } from '../forecast/app.forecast.forecast-component';
@Component({
	selector:'planner',
	templateUrl:'planner.html',
	providers:[ ApiService ],
	styleUrls:['planner.scss']
})
export class PlannerComponent implements OnInit, OnDestroy{
	//productNext = [];
	isLoading = true;
	prevProduct:IProduct = { id:1, name:'', on_hand:0.0, item_no:'', available:0, qa_hold:0 };
	nextProduct:IProduct = { id:1, name:'', on_hand:0.0, item_no:'', available:0, qa_hold:0 };
	nextIndex = 0;
	prevIndex = 0;
	initDate;
	numOfDates:number = 30;
	numOfDatesBack:number = 7;
	products;
	product:IProduct = { id:1, name:'', on_hand:0.0, item_no:'', available:0, qa_hold:0 };
	totalOrder = 0;
	items;
	itemOrders;
	dataForCal = [];
	calendar:ICalendar[] = [];
	pendingOrders;
	itemsCount=0;
	user;
	scheduled;
	carryOverSchedule;
	qaHoldsData = [{product_name:'',cases:0}];
	totalHold = 0;
	showForecastButton = true;
	chartType='bar';

	@ViewChild('forecast') forecast : ForecastComponent
	
	constructor( 
		private apiService:ApiService, 
		private plannerService:PlannerService, 
		private authService : AuthService,
		private route: ActivatedRoute,
  		private router: Router){
	}

	ngOnInit(){
		this.user = this.authService.getUser();
		this.apiService.getAll('products').subscribe(data => {
			this.products = data;
			//console.log('fetching All products...');
			this.getItems(this.products[0]);
			//this.renderNav(this.products[0]);
		},
		(error) => console.log(error),
		() => console.log('...'));
		
	}
	
	ngAfterViewChecked(){
		setTimeout(()=>this.isLoading=false,300);
	}

	ngOnDestroy(){
		this.isLoading=true;
	}

	newSheduledEnter(e){
		this.getItems(e||this.product);
		//console.log('event',e);
	}
	updateDays(e){
		this.numOfDatesBack = e.back;
		this.numOfDates = e.foward;
		this.getItems(this.product);
	}

	getItems(product){
		this.showForecastButton = true;
		this.itemsCount = 0;
		this.items = null;
		this.itemOrders=null;
		this.scheduled=null;
		
		this.qaHoldsData = [{product_name:'',cases:0}];
		this.product = { id:1, name:'', on_hand:0.0, item_no:'', available:0, qa_hold:0 };
		this.product = product;
		
		//console.log('product populated');
		
		this.apiService.get_qa_holds(product,'Hold').subscribe( data => { 
			//console.log('...fetching qaHold Data')
			this.qaHoldsData = data;
		},
		(error)=>console.log(error),
		()=> console.log('...qaHold Data Complete'));
		

		this.apiService.getItems( product ).subscribe(
			res => { 
				// response items
				this.items = res.data;  // fetch product with item id
				this.scheduled = res.schedule;
				//console.log('scheduled',res.schedule);
				this.itemsCount++;

				this.calendar = []; // empty calendar
				this.initDate = moment().subtract(this.numOfDatesBack,'days'); // initial date back 20 days
				//console.log("initDate = ", this.initDate)
				for ( let i = 0; i < this.numOfDates; i++ ) { // loop to create 55 days from initDate
					/* 
						initialize calandar with 0 values 
					*/
					this.calendar.push( new Calendar( this.initDate.add(1,"day").format() , 0 , 0 , 0 , 0 ) );
				}

				//console.log('calendar mounted...');
			},
			error=> {	
				//error 
				console.log(error);		
			},
			 

			// complete 
			()=> { 
				this.qaHolds(product);
				console.log('qaHoldCall');
				//this.forecast.updateForecast(this.product);
			});

	}

	updateForecast(product,chartType){
		this.showForecastButton = false;
		this.forecast.updateForecast(product,chartType);
	}

	qaHolds(product){
		setTimeout(()=>{
			let carryOverScheduledBalance = this.scheduled.reduce( ( total,current ) => {
				if( moment(current.date).isBefore(this.calendar[0].date,'day') )
					return total+parseFloat(current.total);
				return total;
			},0);

			this.totalHold = this.qaHoldsData.reduce( (acc,current) => { return acc+parseFloat(current.cases.toString()) }, 0 )
			this.calendar[0].balance = (this.product.on_hand - this.totalHold) + carryOverScheduledBalance;
			this.populateCalendarWithData();
			this.planned();	
		},0);
		
	}

	populateCalendarWithData(){
		this.calendar.map(data => { 
			this.scheduled
				.filter( schedule => { 
					if(moment(data.date).format("L") === moment(schedule.date).format("L"))
						return schedule;
				})
				.map( schedule => data.scheduled = parseFloat(schedule.total) )
				
			
			this.items
				.map( item => data.planned = 0);
				//.filter( item => moment(data.date).format("L") === moment(item.planned_date).format("L") )
				//.map( item => data.planned = item.quantity);
			
			this.items.filter(item =>  moment(data.date).format("L") === moment(item.order_ship_date).format("L") )
				.map( item => data.committed = item.quantity )

			return data;
		})
		
	}

	planned(){
		let newCal = this.calendar.reduce( (calendar, current,i) =>{
			current.balance = parseFloat(calendar[i].balance) + (current.scheduled + current.planned) -  current.committed
			calendar.push(current); 
			calendar[i].planned = (current.balance < 0 && current.committed > 0 )? current.committed-calendar[i].balance : 0;
			calendar[i].balance = (calendar[i].planned > 0)? calendar[i].planned+calendar[i].balance : calendar[i].balance
			current.balance = (calendar[i].planned > 0)? calendar[i].balance - current.committed: current.balance
			
			return calendar
		},[this.calendar[0]])
		setTimeout(()=>{
			this.calendar = newCal;
			this.calendar.shift();
		},1500);
	

	}

	getPendingOrders(){
		this.apiService.getPendingOrders().subscribe(data => this.pendingOrders = data);
	}

	getPendingItems(){
		this.apiService.getPendingItems().subscribe(data => this.itemOrders = data);
	}

	//nextProductFoward(e){
		//this.renderViewWithNextProduct(e.index);
	//}

	//prevProductBack(e){
		//this.renderViewWithPrevProduct();
	//}

	//renderViewWithNextProduct(index){
		// this.nextIndex = index
		// let product = this.products[index];
		// if (this.products[this.nextIndex+1]){
		// 	this.nextProduct = this.products[++this.nextIndex];
		// }else{
		// 	this.nextIndex = 0;
		// 	let product = this.products[this.nextIndex];
		// 	this.nextProduct = this.products[this.nextIndex];
		// }
		// this.newSheduledEnter(product);
	//}

	//renderNav(product){
		// let nav = this.products.reduce( (item,current,index) => {
	 //  		if ( current.id == product.id){
	 //  			item.push(this.products[index-1]);
	 //  			item.push(current);
	 //  			item.push(this.products[index+1]);
	 //  		}
	 //  		return item;
		// },[]);
	  	  
	 //  	this.prevProduct 	= nav[0];
	 //  	this.product 		= nav[1];
	 //  	this.nextProduct 	= nav[2];
	  	
	 //  	this.getItems(this.product);
	  	
	  //console.log(nav[0],nav[1],nav[2]);
	//}
}


			


		















































































































