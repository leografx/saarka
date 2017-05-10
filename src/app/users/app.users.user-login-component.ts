import { Component, EventEmitter } from '@angular/core';
import { AuthService } from '../services/app.services.auth.service'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
	selector:'login',
	templateUrl:'login.html',
	outputs:['isLoggedIn']
})
export class UserLoginComponent {
	userId;
	password;
	user;
	isLoggedIn:EventEmitter<any> = new EventEmitter<any>();
	token;
	error;
	
	constructor (private authService : AuthService , private router : Router 	) { }

	submit() {
		let credentials =  { userId : this.user , password : this.password } ;
		this.authService.login(credentials).subscribe(data => { 
			this.isLoggedIn.emit(data);
			this.authService.setUser(data);
			this.checkAuth();
		});
	}

	checkAuth(){
		let user = this.authService.getUser();
		if(user.logged!==1){
			this.error = "Your Username or Password were Incorect!"
		}
	}


}