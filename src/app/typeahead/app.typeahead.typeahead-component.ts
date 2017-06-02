import { Component , OnInit , EventEmitter} from '@angular/core';
import { ApiService } from '../services/api.service';
import { CountPipe } from '../pipes/count.pipe';
import { FilterPipe } from '../pipes/filter.pipes'

@Component({
	selector:'typeahead',
	inputs: [ 'table' ],
	outputs: [ 'selectedItem', 'filterCount' ],
	template:`
		<div class="typeahead list-group" *ngIf="table.show">
			<a  class="col-md-3 list-group-item" *ngFor="let item of data |filter:table.filter" (click)="selected(item);table.show=false;">
				{{ item[table.field] }} 
			</a>
		</div>
	`,
	styles:[`
		.typeahead{
			position:absolute;
			width:150%;
			z-index:2600;
		}

	`],
	providers:[ApiService]
})

export class TypeAheadComponent implements OnInit{
	selectedItem : EventEmitter<any> = new EventEmitter<any>();
	filterCount : EventEmitter<any> = new EventEmitter<any>();
	
	table = { name : 'customers' , field : 'name' , show : false ,filter:''};
	data = [];

	constructor( private apiService : ApiService){}

	ngOnInit(){
		this.apiService.getAll( this.table.name )
		.subscribe( data => this.data = data ,
			error => console.log( error ),
			()=> console.log( ':)' ) 
			);
		
		setInterval(()=> {
			this.filteredCount(); 
		},0)
	}

	selected(row){
		this.selectedItem.emit(row);
	}

	filteredCount(){
		let filter = new FilterPipe();
		let count = filter.transform(this.data,this.table.filter).length;
		this.filterCount.emit(count);
		
	}

}