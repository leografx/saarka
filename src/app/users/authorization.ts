import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { AuthService } from '../services/app.services.auth.service';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class Auth implements CanActivate {
	auth;
	
	constructor ( private router:Router, private authService : AuthService){}

	canActivate (
		route:ActivatedRouteSnapshot,
		state:RouterStateSnapshot):boolean{
		let user = this.authService.getUser();
		if ( user ) {
			return true;
		}else{
			return false
		}
	}
}