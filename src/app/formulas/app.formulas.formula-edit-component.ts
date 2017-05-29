import { Component, OnInit,OnDestroy,AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service'
import { FormSettings } from '../interfaces/form-settings'
import { IFormula } from './app.formulas.formula-interface'
import { FormulaFormComponent } from './app.formulas.formula-form-component'

@Component({
	selector:'formula-edit',
	templateUrl:'formula-edit.html',
	providers:[ApiService],	
})

export class FormulaEditComponent implements OnInit, OnDestroy, AfterViewInit{
	formSettings:FormSettings = {formType:'update',title:'Edit Formula'};
	
	constructor(private apiService:ApiService, private activatedRoute:ActivatedRoute){}
	

	
	ngOnInit(){

	}

	ngAfterViewInit(){

		
	}


	ngOnDestroy(){

	}
}