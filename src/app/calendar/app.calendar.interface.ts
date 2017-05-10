export interface ICalendar{
	date:any;
	scheduled:any;
	committed:any;
	planned:any;
	balance:any;
}

export class Calendar {
	date:any;
	scheduled:any;
	committed:any;
	planned:any;
	balance:any;

	constructor(date,scheduled,committed,planned,balance){
		this.date = date;
		this.scheduled = scheduled;
		this.committed = committed;
		this.planned = planned;
		this.balance = balance;

	}
}