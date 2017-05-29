import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
	selector:'uom',
	templateUrl:'uom.html',
	inputs:['weight_unit'],
	outputs:['selectedUom'],
	styles:[`
		.uom-list{
			position:absolute;
			width:100%;
			top:-10px;
			z-index:1001;
		}
	`]

})

export class UomComponent implements OnInit{
	weight_unit;
	uomModel = "LBS";
	uom:[string] = ["LBS","OZ","EACH","TSP"];
	collapse=false;
	selectedUom:EventEmitter<any> = new EventEmitter<any>();
	
	ngOnInit(){
		this.uomModel = this.weight_unit;
	}

	uomSelected(uom){
		this.selectedUom.emit(uom);
	}
}