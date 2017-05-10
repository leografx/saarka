import { Component } from '@angular/core';

@Component({
	selector:'batch-ticket',
	templateUrl:'batch-ticket.html',
	styleUrls:['batch-ticket.css']
})

export class BatchTicketComponent{
	ticket = {
		formula_name:'Individual Tuxedo Bombe',
		formula_no:'AN801',
		packing_date:'1/5/17',
		built_date:'1/4/14',
		lot_no:'17005',
		order_size : {
			units:5832,
			trays:243,
			packing_trays:972,
			cases:243
		},
		department: "Individual Department",
		department_code:'I',
		last_revised:'9/1/16',
		loss_percentage:0,
		loss_uom:'LBS',
		total_weight:1549.125,
		total_weight_uom:'LBS',
		slice_trimmed:{
			date:''||'n/a',
			sliced_by:''||'n/a',
			amt_of_cakes:''||'n/a',
			loss_if_any:''||'n/a'
		},
		built:{
			date:'',
			sliced_by:'',
			amt_of_trays:'',
			loss_if_any:''
		},
		packaging:{
			date:'',
			pack_by:'',
			amt_of_cs:'',
			loss_if_any:'',
			label:''
		},
		warehouse:{
			date:'',
			rev_by:'',
			amt_of_cs:'',
			verifier:'',
			label:''
		},
		specifications:{
			weight_finished:4.25,
			weight_uom:'oz',
			unit_diameter:'2.88"',
			pack_size:' 4/6 each',
			pallet:'10x8',
		},
		materials:[
			{
				item_no:'I0205',
				item_description:'Tuxedo Bombe Stage I',
				amount_per_unit:1,
				uom:'Each',
				lot_no:'',
				in_process_weight:3.1,
				in_process_weight_uom:'OZ',
			},
			{
				item_no:'I0206',
				item_description:'Chocolate Ganache',
				amount_per_unit:1.1,
				uom:'OZ',
				lot_no:'',
				in_process_weight:4.2,
				in_process_weight_uom:'OZ',
			},
			{
				item_no:'I0207',
				item_description:'White Chocolate Drizzle',
				amount_per_unit:0.05,
				uom:'OZ',
				lot_no:'',
				in_process_weight:4.25,
				in_process_weight_uom:'OZ',
			}
		],

		instructions:[
			{
				step_no:1,
				step:"Remove the Tuxedo Bombe Filling from flexi pan and place on a rack"
			},
			{
				step_no:2,
				step:"Pour ganache over bombes to fully cover"
			},
			{
				step_no:3,
				step:"Using a pastry bag with White Chocolate and drizzle over bombes covered with ganache"
			},
			{
				step_no:4,
				step:"Freeze"
			},			
		],

		bom_sections:[
			{
				item_no:'DS5001',
				item_description:'Red Paper Cup',
				amt_per_case:24,
				total_amount:5832,
				uom:'Each',
				lot_no:'',
				verifier:''
			},
			{
				item_no:'P9007',
				item_description:'Ind 6-Pack Desert Tray',
				amt_per_case:4,
				total_amount:972,
				uom:'Each',
				lot_no:'',
				verifier:''
			},
			{
				item_no:'P2011',
				item_description:'Annies/David/UD INDIVIDUAL MASTER',
				amt_per_case:1,
				total_amount:243,
				uom:'Each',
				lot_no:'',
				verifier:''
			},
			{
				item_no:'F4324',
				item_description:'GPS 22" x 4375\' CF 60GA Shrink Film',
				amt_per_case:8,
				total_amount:1944,
				uom:'FT',
				lot_no:'',
				verifier:''
			},
			{
				item_no:'W0280',
				item_description:'Bubble Split',
				amt_per_case:2,
				total_amount:486,
				uom:'Each',
				lot_no:'',
				verifier:''
			},
			{
				item_no:'',
				item_description:'Label 4 x 3.25',
				amt_per_case:1,
				total_amount:243,
				uom:'Each',
				lot_no:'',
				verifier:''
			}			
		]
	};

}






































