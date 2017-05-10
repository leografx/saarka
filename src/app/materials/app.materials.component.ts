import { Component, EventEmitter } from '@angular/core';
import { ApiService } from "../services/api.service";
import { Material } from './app.materials.material';

import 'rxjs/add/operator/map';

@Component({
	selector:'materials',
	templateUrl:'materials.html',
	providers:[ApiService],
	outputs:['selectedMaterial']
})

export class MaterialsComponent {
	materials:Material[];
	showMaterials = false;
	materialSelected:any;
	isOn = [];
	fieldModel='name';
	materialModel='';
	btn = {name:true,size:false,item:false};
	selectedMaterial:EventEmitter<any> = new EventEmitter<any>();
	
	
	constructor(private api:ApiService){
		api.getAll('materials').subscribe( (data:Material[]) => this.materials = data );
	}

	selected(material,i){
		this.materialSelected = material;
		this.materialModel = material.name;
		this.active(i);
		this.selectedMaterial.emit(material);
	}

	active(index){
		this.isOn = [];
		this.isOn[index]='active';
	}

	btnSelected(btn){
		this.btn[btn] = true;
	}

	addNewItem(){
		this.selectedMaterial.emit({ name:this.materialModel,item_no:"",size:""})
	}
}