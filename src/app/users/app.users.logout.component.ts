import { Component, EventEmitter } from '@angular/core';
import { AuthService } from '../services/app.services.auth.service';

@Component({
	selector:'logout',
	template:`
		<button (click)="logout()" type="button" class="btn btn-primary">
		<span class="fa fa-sign-out"></span> Logout</button>
	`,
	outputs:['logmeout'],
	styles:[`button{
		position:absolute;
		right:10px;
		top:10px;
		z-index:9999;
	}`]
})

export class LogoutComponent{
	logmeout:EventEmitter<any> =  new EventEmitter<any>();
	constructor ( private authService : AuthService ) {}
	logout(){
		console.log( this.authService.getUser() );
		this.logmeout.emit('logout');
	}
}