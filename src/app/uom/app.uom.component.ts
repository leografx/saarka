import { Component, EventEmitter } from '@angular/core';

@Component({
	selector:'uom',
	templateUrl:'uom.html',
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

export class UomComponent{
	uomModel = "LBS";
	uom:[string] = ["LBS","OZ","EACH","TSP"];
	collapse=false;
	selectedUom:EventEmitter<any> = new EventEmitter<any>();

	uomSelected(uom){
		this.selectedUom.emit(uom);
	}
}