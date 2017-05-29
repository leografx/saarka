import { Component, EventEmitter} from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import * as moment from 'moment';

@Component({
  selector:'schedule-modal',
  templateUrl:'schedule-modal.html',
  styleUrls:['schedule.scss'],
  inputs:['linkLabel','item','date'],
  outputs:["updateScheduled"],
  providers:[DatePipe]
})

export class ScheduleModalComponent{
    updateScheduled:EventEmitter<any> = new EventEmitter;
  	quantity;
  	linkLabel;
  	item;
  	date;
    scheduleModal;

	constructor( private apiService : ApiService, private router : Router, private datePipe:DatePipe ){}

  save(){
    let data = {};
    data['date'] = moment(this.date).set({hour:0,minute:0,second:0,millisecond:0}).format();
    data['quantity'] = this.item.planned;
    data['product_id'] = this.item.product.id;
    data['item_no'] = this.item.product.item_no;
    data['name'] = this.item.product.name;
    this.apiService.saveSchedule(data).subscribe();
    this.updateScheduled.emit(this.item.product);
    //this.router.navigate(['/planner']);
    //console.log(data);
  }

	scheduleDate( date , quantity ){
    let newDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    console.log(newDate);
    this.date = newDate.toString();
	}

}




























































