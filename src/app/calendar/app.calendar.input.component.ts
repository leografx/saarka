import { Component } from '@angular/core';


@Component({
	selector:'calendar-input',
	templateUrl:'calendar-input.html',
	inputs:['calendar','showIn','showOut','showBal'],
	styles:[`

		.days{
			width:100%;
			text-align:center;
			background-color: rgba(135,226,209,.99);
		}

		.bordered{
			background-color:rgba(135,226,209,1);
			border:1px solid rgba(255,255,255,.2);
		}

		.label-item{
			text-align:left;
			padding-left:10px;
			font-size:10px;
		}

		.box{
			text-align: center;
			min-width:70px;
			height:245px;
			margin:5px auto;
		}

		.date{
			padding:8px;
			font-size:14px;
		}



		.empty td{
			width:33%;
		}

		.data-item{
			width:33%;
			padding:1px;
			border-collapse: collapse;
			text-align:center;
		}
		.date-box td{
			height:30px;
			background:rgba(61,52,95,.1);
			color:rgba(61,52,95,1);
			text-align:center;
		}
		.date-box-empty td {
			height:30px;
			background:transparent;
			color:transparent;
		}

		.label-out{
			color:rgb(51, 153, 255);
		}

		.label-in{
			color:rgb(51, 204, 51);
		}

		.label-bal{
			color:rgb(153, 0, 0);
		}

		.empty,.empty .data{
			background:transparent;
			color:transparent;
			border:0px;
		}

		.balance-td{
			background-color:rgba(153, 0, 0,.1);
		}

		.alert-shortage{
			background-color:rgba(153, 0, 0,1);
			color:white;
		}

	`]
})

export class CalendarInputComponent{
	calendar;
}