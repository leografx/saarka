import { Injectable } from "@angular/core";


@Injectable()
export class PlannerService{

	data:any = [];

	addData(data){
		this.data = [];
		this.data.push(data);
		
	}

	getData(){
		this.data;
	}
}