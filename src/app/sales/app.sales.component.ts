
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
	selector:'sales',
	templateUrl:'sales.html',
	styleUrls:['sales.css'],
	providers:[ApiService]
})

export class SalesComponent implements OnInit{
	orders = [];
	filter='';
	
	constructor( private apiService:ApiService ){}

	ngOnInit(){
		this.apiService.getPendingOrders().subscribe(data => this.orders = data);
	}
}