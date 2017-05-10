import { Component, EventEmitter} from '@angular/core';
import { ApiService } from "../services/api.service";
import 'rxjs/add/operator/map';

@Component({
	selector:'products',
	templateUrl:'products.html',
	styleUrls:['products.css'],
	providers:[ApiService],
	outputs:['selectedProduct']
})

export class ProductComponent{
	selectedProduct = new EventEmitter<any>()
	products:any;
	productSelected:any;
	isOn = [];
	fieldModel='name';
	productModel='';
	btn = {name:true,size:false,item:false};
	showProducts = false;
	
	
	constructor(private api:ApiService){
		api.getAll('products').subscribe(data => this.products = data);
	}

	selected(product){
		this.productModel = product.name;
		this.selectedProduct.emit(product);
		this.productSelected = product;
		let index = this.products.indexOf(product);
		this.active(index);
	}

	active(index){
		this.isOn = [];
		this.isOn[index]='active';
	}

	btnSelected(btn){
		this.btn[btn] = true;
	}
}