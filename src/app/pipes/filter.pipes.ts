import { Injectable, Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
    transform(items: any[], value : string): any[] {  
    	if (!items) return []; 
        let itemsFiltered =  items.filter(it => {
        	return JSON.stringify(it)
     		.toLowerCase()
     		.indexOf(value.toLowerCase()) != -1
 		});
 		return itemsFiltered;
    }
}