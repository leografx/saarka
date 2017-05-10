import { Component } from '@angular/core';
import { PlannerService } from '../services/planner.service';
import * as moment from 'moment';


@Component({
	selector:'calendar',
	templateUrl:'calendar.html',
	styleUrls:['calendar.css'],
	inputs:['item','calendarData']
})

export class CalendarComponent{
	toggleIn:false;
	toggleOut;
	toggleBal;
	showOut:Boolean = true;
	showIn:Boolean = true;
	showBal:Boolean = true;
	toggleView:Boolean = true;
	next:any;
	currentDate:any;
	previous:any;
	currentCalendar;
	calendar = [];
	graph:string;
	product;
	item:any = {};
	orders:any;
	calendarData:any = [];

	constructor(private plannerService:PlannerService){
		this.currentCalendar = moment().format("YYYY-MM-DD");
		this.next = moment(this.currentCalendar,"YYYY-MM-DD").add(1,'month');
		this.previous = moment(this.currentCalendar,"YYYY-MM-DD").subtract(1,'month');
		this.calendarGenerator();
	}





	calendarGenerator(){
		let d=null//console.log('from calendarGenerator:',this.calendarData);
		this.currentDate = this.currentCalendar;	
		this.previous = moment(d,"YYYY-MM-DD").subtract(1,'month');
		this.next = moment(d,"YYYY-MM-DD").add(1,'month');
		
		this.calendar =[];
		let datePass = d;
		let date = moment(datePass,"YYYY-MM-DD"),
		month = date.format('M'),
		year = date.format('YYYY');
	
		
		this.offsetCalendar(7);
		
	
		//console.log(year,month,offset)
		// console.log('==',this.calendarData);
		
		for (let i=0; i < 31; i++){
			let dateString = moment(this.currentDate).add(i,'day').format("YYYY-M-D"); //year+'-'+month+'-'+days[i];
			
			if(moment(dateString,"YYYY-M-D").isValid()){
				
				let data = this.populateData(dateString);
		
				//console.log('after Data: ', data);
				let obj = {
				  date:dateString,
				  shortDate:moment(dateString).format('L'),
				  medDate:moment(dateString).format('ll'),
				  longDate:moment(dateString).format('LL'),
				  empty:false,
				  data:data
				  //data:{in:data.in,out:data.out,bal:data.bal,prevIn:data.prevIn,prevOut:data.prevOut,prevBal:data.prevBal,planned:0}
				}
				this.calendar.push(obj);
			}else{
				this.offsetCalendar(1);
			}
		}
	}

	populateData(dateString){
		//console.log(dateString.toString());
		
		
		
			this.calendarData.forEach((item,i) => {
				console.log("populate",item,i,dateString,dateString==item.shipDate);
				if (item.shipDate == dateString.toString()){
					return { in:item.in,out:0,bal:0,prevIn:0,prevOut:0,prevBal:0,planned:0 }
				}	
			});		
		

	
					return { in:0,out:0,bal:0,prevIn:0,prevOut:0,prevBal:0,planned:0 }
	}

	offsetCalendar(offset){
		let subtractDate = offset;

		for(let i=0; i < offset; i++){
			let date = moment(this.currentDate).subtract(subtractDate,'days').format('YYYY-M-D')
			// let data = this.item.calendarData[date]||{in:0,out:0,bal:0,prevIn:0,prevOut:0,prevBal:0,planned:0};
			let data = {in:0,out:0,bal:0,prevIn:0,prevOut:0,prevBal:0,planned:0};
			this.calendar.push({
				date: moment(date).format('L'),
				shortDate: moment(date).format('L'),
				medDate: moment(date).format('ll'),
				longDate: moment(date).format('LL'),
				empty:false,
				data:{in:data.in,out:data.out,bal:data.bal,prevIn:data.prevIn,prevOut:data.prevOut,prevBal:data.prevBal,planned:0}
			});
				subtractDate--;
				//console.log('from offset', date);
		}	

		
	}

	showGraph(graph){
		this.graph = graph;
	}
}