import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
	selector:'departments',
	templateUrl:'departments.html',
	styleUrls:['departments.css'],
	providers:[ApiService],
	outputs:['selectedDepartment'],
	inputs:['departmentModel']

	
})
export class DepartmentComponent{
	departments;
	departmentModel='';
	toggleDepartment = false;
	selectedDepartment:EventEmitter<any> = new EventEmitter<any>();

	constructor(private apiService:ApiService, private router:Router ){
		this.apiService.getAll('departments').subscribe( (data)=> this.departments = data );
		if(this.router.url==="/departments"){
			this.toggleDepartment=false;
			this.getAllDepartments();
		}
	}

	getAllDepartments(){
		this.toggleDepartment=!this.toggleDepartment
	}

	departmentSelected(department,i){
		this.selectedDepartment.emit(department)
		//this.departments.splice(i,1);
	}
}
