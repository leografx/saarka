import { Component, EventEmitter } from '@angular/core'
import { ICalendar } from '../calendar/app.calendar.interface';
import * as moment from 'moment';
import jspdf from "jspdf";

@Component({
	selector:'planner-date',
	templateUrl:'planner-date.html',
	inputs:['items','calendar','product','numOfDates','numOfDatesBack'],
	outputs:['updateScheduled','updateDays'],
	styleUrls:['planner.scss']
})
export class PlannerDateComponent{
	updateDays : EventEmitter<any> = new EventEmitter;
	updateScheduled:EventEmitter<any> = new EventEmitter;
	initDate;
	calendar:ICalendar;
	items;
	product;
	numOfDates;
	numOfDatesBack;
	today = moment().add(2,'days').format("L");

	constructor() {}

	itemSelected() {
		//console.log( this.items );
	}

	highLight( bal ) {
		if ( bal < 1 ){
			return 'red';
		}
	}

	committedHighlight( committed , style )  {
		if ( committed > 0 ){
			if ( style === 'border' ){
		
				return '1px solid green';
			}
		

			if ( style === 'bg' ){
				
				return 'rgba(0,206,175,.1)';
			}
		}
	}

	schedule() {
		alert('pop-up goes here')
	}

	updateTriggerfromScheduleModal(e){
		//console.log('plannerDate:',e)
		this.updateScheduled.emit(e);
	}

	updateViewDays(direction){
		this.updateDays.emit({back:this.numOfDatesBack,foward:this.numOfDates});
	}
}































