import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
	selector:'molds',
	templateUrl:'molds.html',
	styleUrls:['molds.css'],
	providers:[ApiService],
	outputs:['selectedMold'],
	inputs:[]

	
})
export class MoldComponent{
	molds;
	moldModel='';
	toggleMold = false;
	selectedMold:EventEmitter<any> = new EventEmitter<any>();

	constructor(private apiService:ApiService, private router:Router ){
		this.apiService.getAll('molds').subscribe( (data)=> this.molds = data );
		
		if(this.router.url==="/molds"){
			this.toggleMold=true;
		}
	}

	getAllMolds(){
		this.toggleMold=!this.toggleMold
	}

	moldSelected(mold,i){
		this.selectedMold.emit(mold)
		this.molds.splice(i,1);
	}
}
