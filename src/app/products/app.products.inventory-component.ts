import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
	selector:'product-inventory',
	templateUrl:'product-inventory.html',
	providers:[ApiService]
})		

export class ProductInventoryComponent implements OnInit, OnDestroy{
	products;
	productFilter = '';
	
	constructor ( private apiService : ApiService ) {}
	
	ngOnInit () {
		this.products = this.apiService.getAll('products');
	}

	ngOnDestroy(){}

	update(product){
		this.apiService.updateProduct(product).subscribe();
	}
}