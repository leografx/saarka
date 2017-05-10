import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
	selector:'product-inventory',
	templateUrl:'product-inventory.html',
	providers:[ApiService]
})		

export class ProductInventoryComponent implements OnInit{
	products;
	productFilter = '';
	
	constructor ( private apiService : ApiService ) {}
	
	ngOnInit () {
		this.apiService.getAll('products').map(products => this.products = products).subscribe()
	}

	update(product){

		this.apiService.updateProduct(product).subscribe();
	}
}