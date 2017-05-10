import { Component } from '@angular/core';

@Component({
	selector:'build-ticket',
	templateUrl:'build-ticket.html',
	styleUrls:['build-ticket.css']
})

export class BuildTicketComponent{

	ticket:any = {
		date:'4/4/2017',
		product_name:'Individual Tuxedo Bombe',
		product_no:'801',
		total_prod_wt:'4.25',
		total_prod_wt_uom:'oz',
		cuts:'No Cut/No Score',
		serving_size:1,
		total_weight:0.0,
		build:[
			{
				what:'Annie\'s Chocolate Cake',
				lot_number:'',
				how_many:'1',
				weight:0.5,
				weight_uom:'oz',
				total_wt:.5,
				total_wt_uom:'oz',
			},
			{
				what:'White Tuxedo Bombe Mousse',
				lot_number:'',
				how_many:'1',
				weight:1.1,
				weight_uom:'oz',
				total_wt:1.6,
				total_wt_uom:'oz',
			},
			{
				what:'Chocolate Tuxedo Bombe Mousse',
				lot_number:'',
				how_many:'1',
				weight:1.5,
				weight_uom:'oz',
				total_wt:3.1,
				total_wt_uom:'oz',
			},
			{
				what:'Annie\'s Ganache',
				lot_number:'',
				how_many:'1',
				weight:1.1,
				weight_uom:'oz',
				total_wt:4.2,
				total_wt_uom:'oz',
			},
			{
				what:'Annie\'s White Chocolate Stripes',
				lot_number:'',
				how_many:'',
				weight:0.05,
				weight_uom:'oz',
				total_wt:4.25,
				total_wt_uom:'oz',
			}
		]
	}

	constructor(){
		this.ticket.build.reduce( (prev,next,i) => this.ticket.total_weight =  prev + next.weight  ,0.00);
		console.log(this.ticket);
	}
}