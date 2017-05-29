import { Component, ElementRef } from '@angular/core';
import { ApiService } from '../services/api.service';
import Chart from 'chart.js';

@Component({
	selector:'[forecast]',
	templateUrl:'forecast.html',
	providers:[ApiService]
})

export class ForecastComponent{
	chart;
	forecast;
	product;
	toggleType=true;
	chartType;
	year;
	
	constructor( private el:ElementRef, private apiService:ApiService ){
		this.year = new Date().getFullYear();
	}

	updateForecast(product,chartType){
		//this.chartType = chartType;
		this.product = product;
		this.el.nativeElement.style.height = "200px";
		this.el.nativeElement.style.width = "95%";
		this.el.nativeElement.style.marginBottom = "30px";
		
		var ctx = this.el.nativeElement
		
		this.apiService.getForcast(this.product.id,this.year)
		.subscribe(data => this.forecast = data.json(),
		(error)=> console.log(error),
		()=> {
				let label = this.product.name;
				let jan = this.forecast.filter(data=>data.labels==="1").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let feb = this.forecast.filter(data=>data.labels==="2").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let mar = this.forecast.filter(data=>data.labels==="3").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let apr = this.forecast.filter(data=>data.labels==="4").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let may = this.forecast.filter(data=>data.labels==="5").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let jun = this.forecast.filter(data=>data.labels==="6").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let jul = this.forecast.filter(data=>data.labels==="7").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let aug = this.forecast.filter(data=>data.labels==="8").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let sep = this.forecast.filter(data=>data.labels==="9").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let oct = this.forecast.filter(data=>data.labels==="10").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let nov = this.forecast.filter(data=>data.labels==="11").reduce( (total,next) => total+parseFloat(next.quantity),0 )
				let dec = this.forecast.filter(data=>data.labels==="12").reduce( (total,next) => total+parseFloat(next.quantity),0 )

				let labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
				let data = [jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];
				let avg = data.reduce( (total,next) => total + next) / data.length;
				label += ' Avg '+Math.floor(avg);
				
				var chart = new Chart(ctx, {
			    type: chartType,
			    data: {
			        labels: labels,
			        datasets: [{
			            label: label,
			            data: data,
			            backgroundColor: 'rgba(0, 204, 197, 0.2)',
			            borderColor: 'rgba(0,204,197,1)',
			            borderWidth: 1

			        }]
			    },
			    options: {
			    	tooltips:{
			    		mode:'point'
			    	},
			    	legend:{
			    		display:false
			    	},
			    	title: {
			            display: true,
			            text: label,
			            fontSize:14
			        },
			    	events: ['click'],
			        scales: {
			            xAxes: [{
			                ticks: {
			                    beginAtZero:true
			                }
			            }]
			        }
			    }
			});
		});		
	}


}