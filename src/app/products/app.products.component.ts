import { Component, EventEmitter, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";
import 'rxjs/add/operator/map';

@Component({
	selector:'products',
	templateUrl:'products.html',
	styleUrls:['products.css'],
	providers:[ApiService],
	inputs:['productModel'],
	outputs:['selectedProduct','nextProduct','listOfProducts','orderProductSelected']
})

export class ProductComponent implements OnInit{
	nextProduct = new EventEmitter<any>()
	listOfProducts =new EventEmitter<any>()
	selectedProduct = new EventEmitter<any>()
	orderProductSelected =  new EventEmitter<any>()
	products:any;
	productSelected:any;
	isOn = [];
	fieldModel='name';
	productModel='';
	btn = {name:true,size:false,item:false};
	showProducts = false;
	prevProduct={name:''};
	nexProduct = {name:''};
	
	
	constructor(private api:ApiService){}

	ngOnInit(){
		this.api.getAll('products')
		.subscribe( (data) => {this.products = data; return data},
			null,
			()=>{
				this.products.map( (data,i)=> data['index']=i);
				console.log(this.products)
			this.prevProduct = undefined;
			this.nexProduct = this.products[1];
			this.selected(this.products[0]);
			this.productModel = this.products[0].name;
		});	
	}

	selected(product){
		this.productModel = product.name;
		this.selectedProduct.emit(product);
		this.productSelected = product;
		let index = this.products.indexOf(product);
		this.nextProduct.emit(this.productSelected);
		this.prevProduct = this.products[product.index-1];
		this.nexProduct = this.products[product.index+1];
		//this.listOfProducts.emit({next:i+1||0, prev:product.i-1||0});
		this.active(index);
	}

	navClick(product){
		this.selected(product);
	}

	active(index){
		this.isOn = [];
		this.isOn[index]='active';
	}

	btnSelected(btn){
		this.btn[btn] = true;
	}

	productOrderSelected(product){
		this.orderProductSelected.emit(product);
	}
}