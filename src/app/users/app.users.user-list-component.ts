import { Component , OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'

@Component({
	selector:'user-list',
	templateUrl:'user-list.html',
	providers:[ApiService]
})

export class UserListComponent implements OnInit{
	
	users;
	editUser = {name:'',lastname:'',email:''};
	
	constructor( private apiService : ApiService ){}

	ngOnInit(){
		this.apiService.getAll('users').subscribe(data => this.users = data);
	}

	edit(user){
		this.editUser = user;
	}

}