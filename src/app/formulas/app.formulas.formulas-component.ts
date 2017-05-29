import { Component, OnInit} from '@angular/core';
import { ApiService } from '../services/api.service'
import { IFormula } from './app.formulas.formula-interface'

@Component({
	selector:'formulas',
	templateUrl:'formulas.html',
	styleUrls:['formulas.css'],
	providers:[ApiService]
})

export class FormulasComponent implements OnInit{
	formulas:IFormula;
	constructor(private apiService:ApiService){}

	ngOnInit(){
		this.apiService.getAll('formulas').subscribe(data => this.formulas = data);
	}
}