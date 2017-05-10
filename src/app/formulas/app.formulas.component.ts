import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export class Formula{
	constructor ( 
		public id_code,
		public name : string,
		public revision_no : string,
	) {}
}

@Component( {
	selector:'formulas',
	templateUrl:'formulas.html',
	styleUrls:['formulas.css']
} )
export class FormulasComponent implements OnInit{
	materials:any = [];
	mixings = []; 
	form;
	
	 

	constructor () {
		this.mixings.push({step:''});
	}

	ngOnInit(){}


	materialSelected ( material ){
		console.log(material)
		this.materials.push(material);
	}

	removeMaterialItem ( i ){
		this.materials.splice ( i ,1 );
	}

	uom ( uom,material ){
		material.weight_unit = uom;
	}

	addStep (step_no) {
		this.mixings.push({step:''})
	}   

	reNumber(){
		this.mixings.map( (data, i) => this.mixings[i]['step_no'] = i+1 );
	}

	deleteStep (index) {
		this.mixings.splice(index,1);
		this.reNumber()
	}

	submit(f : NgForm){
		this.reNumber()
		this.form = f.value;
		this.form['materials'] = this.materials;
		this.form['mixings'] = this.mixings;
		console.log(this.form)
	}

	updateMaterial(material,i,key,value){
		material[key] = value;
		console.log(material[key],material,value);
	}

	updateStep( event , step ){
		step.step = event.value;
	}
}




















































