import { Component } from "@angular/core";

@Component({
	selector:"annies-nav",
	templateUrl:"nav.html",
	inputs:['toggleSideBar','toggleMenu'],
	styleUrls:['nav.css']
})
export class NavComponent{
	toggleMenu=false;
	toggleOrders=false;
	toggleProduction=false;
}