import { Component } from '@angular/core'
import { ICalendar } from '../calendar/app.calendar.interface';
import * as moment from 'moment';


@Component({
	selector:'planner-date',
	templateUrl:'planner-date.html',
	inputs:['items','calendar','product'],
	styleUrls:['planner.scss']
})
export class PlannerDateComponent {
	initDate;
	calendar:ICalendar;
	items;
	product;
	today = moment().add(2,'days').format("L");

	constructor() {}

	itemSelected() {
		console.log( this.items );
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

}