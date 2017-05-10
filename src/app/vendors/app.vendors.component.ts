import { Component } from '@angular/core';
import { ApiService } from "../services/api.service";


@Component({
	selector:'vendors',
	templateUrl:'vendors.html',
	providers:[ApiService],
	styles:[`
		.small-label{
			width:30px;
			font-size:7px;
			color:rgb(69,58,113);
			position:relative;
			top:-3px;
			margin-right:10px;
			text-align:right;
		}
	`]
})

export class VendorsComponent{
	vendors:any;
	vendorSelected:any;
	isOn = [];
	vendorModel='';
	blurIt=false;
	
	
	constructor(private api:ApiService){
		api.getAll('vendors').subscribe(data => this.vendors = data);
	}

	selected(vendor){
		console.log(vendor);
		this.vendorSelected = vendor;
		let index = this.vendors.indexOf(vendor);
		this.active(index);
	}

	active(index){
		this.isOn = [];
		this.isOn[index]='active';
	}

	stringify(event){
		//let string = JSON.stringify(event);
		console.log(event);
	}
}