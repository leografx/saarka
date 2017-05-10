import { Component , OnInit} from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
	selector:'material-inventory',
	templateUrl:'material-inventory.html',
	providers:[ApiService]
})

export class MaterialInventoryComponent implements OnInit {
	materials;
	materialFilter = '';

	constructor ( private apiService : ApiService ) {}

	ngOnInit(){
		this.apiService.getAll('materials').map(data => this.materials = data).subscribe();
	}

	update(material){
		this.apiService.updateMaterial(material).subscribe();
	}
}