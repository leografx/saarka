import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ForecastComponent } from '../forecast/app.forecast.forecast-component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import  { alertSuccess, alertError } from '../shared/app.shared.sweet-alert';
import { default as swal } from 'sweetalert2';
import { ISubscription } from "rxjs/Subscription";



@Component({
	selector:'forecaster',
	templateUrl:'forecaster.html',
	providers:[ApiService]
})

export class ForecasterComponent implements OnDestroy{
	alive =	true;
	product;
	products;
	forecaster;
	year;
	calendar;
	oldAmount;
	months:any;
	prevProduct;
	nextProduct;

	@ViewChild('forecast') forecast : ForecastComponent

	constructor(private apiService:ApiService, private el:ElementRef){
		this.product={};
		this.year = new Date().getFullYear();
	}
	
	ngOnDestroy(){
		this.alive = false;
	}

	selectedProduct(product){
		this.product = product;
		this.oldAmount = this.product.par;
		this.getForecastData(product.id,this.year);
		this.updateForecast(product,'line');
		console.log(product);
	}

	getForecastData(product,year){
		this.apiService.getForcast(product,year).takeWhile(() => this.alive).subscribe((data)=>this.forecaster = data.json(),(error)=>alertError('Oops No Data available'),()=>this.populateData());
	}

	updateForecast(product,chartType){
		this.forecast.updateForecast(product,chartType);
	}

	submit(id,amount){
		this.oldAmount = amount;
		this.apiService.update_par_from_forecaster(id,amount).takeWhile(() => this.alive).subscribe((data)=> data , (error) => this.errorAlert('Oops! try again'), ()=>this.successAlert());
	}

	successAlert(){
		alertSuccess();
	}

	errorAlert(error){
		alertError(error);
	}

	populateData(){
		let months = [{ title:"Jan" , quantity:0 }, { title:"Feb" , quantity:0 }, { title:"Mar" , quantity:0 }, { title:"Apr" , quantity:0 }, { title:"May" , quantity:0 }, { title:"Jun" , quantity:0 },{ title:"Jul" , quantity:0 },{ title:"Aug" , quantity:0 },{ title:"Sep" , quantity:0 },{ title:"Oct" , quantity:0 },{ title:"Nov" , quantity:0 },{ title:"Dec" , quantity:0 }];	
		this.months = months.reduce( (prev, next, i ) => {
			this.forecaster.map( data => {
				if(parseInt(data.labels)-1 === i){
					next.quantity = data.quantity;
				}
			})	
			prev.push(next);
			return prev;
		},[]);
	}

	listProducts(e){
		this.prevProduct = e.products[e.prev];
		this.nextProduct = e.products[e.next];
	}
}