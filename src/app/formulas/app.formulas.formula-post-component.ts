import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IFormula } from './app.formulas.formula-interface';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router'
import { FormSettings } from '../interfaces/form-settings'

@Component( {
	selector:'formula-post',
	templateUrl:'formula-post.html',
	styleUrls:['formulas.css'],
	providers:[ApiService],
	inputs:['formType']
} )
export class FormulaPostComponent implements OnInit{
	formSettings:FormSettings = {formType:'new',title:'New Formula'};
	// materials:any = [];
	// instructions = []; 
	// formula:IFormula;
	
	constructor () {}

	ngOnInit(){
	
	}


	// materialSelected ( material ){
	// 	this.materials.push(material);
	// }

	// removeMaterialItem ( i ){
	// 	this.materials.splice ( i ,1 );
	// }

	// uom ( uom,material ){
	// 	material.weight_unit = uom;
	// }

	// addStep (step_no) {
	// 	this.instructions.push({step:''})
	// }   

	// reNumber(){
	// 	this.instructions.map( (data, i) => this.instructions[i]['step_no'] = i+1 );
	// }

	// deleteStep (index) {
	// 	this.instructions.splice(index,1);
	// 	this.reNumber()
	// }

	// submit(formula : NgForm){
	// 	if(this.formType==='new'){
	// 		this.save(formula);
	// 	}else{
	// 		this.update(formula);
	// 	}
	// }

	// save(formula){
	// 	this.reNumber()
	// 	this.formula = formula.value;
	// 	this.formula['materials'] = this.materials;
	// 	this.formula['instructions'] = this.instructions;
	// 	this.apiService.postFormula(this.formula);
	// 	this.router.navigate(['/formulas']);
	// 	console.log(this.formula)
	// }

	// update(formula){
	// 	this.reNumber()
	// 	this.formula = formula.value;
	// 	this.formula['materials'] = this.materials;
	// 	this.formula['instructions'] = this.instructions;
	// 	this.apiService.updateFormula(this.formula);
	// 	this.router.navigate(['/formulas']);
	// 	console.log(this.formula)
	// }

	// updateMaterial(material,i,key,value){
	// 	material[key] = value;
	// }

	// updateStep( event , step ){
	// 	step.step = event.value;
	// }
}




















































