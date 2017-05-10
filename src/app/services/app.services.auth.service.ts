import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Rx'
import { Http, Response } from '@angular/http'
import { baseUrl } from '../shared/globals'
import { Credentials } from '../interfaces/app.interfaces.credential-interface'



@Injectable()
export class AuthService {
	error:number;
	isLoggedIn:boolean = false;
	public user;


	constructor ( private http : Http ) {

	}
	
	login (credentials): Observable<any> {
		let url = baseUrl()+'api/authorize';
		let dataPost =  JSON.stringify(credentials)
		return this.http.post( url , dataPost ).map(this.extractData).catch(this.handleError);
	}


	private extractData(res: Response) {
		let body = res.json();
		return body || {};
	}

	private handleError (error: Response | any) {
	// In a real world app, we might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
		  const body = error.json() || '';
		  const err = body.error || JSON.stringify(body);
		  errMsg = ` -  `;
		} else {
		  errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

	getUser(){
		return this.user;
	}

	setUser(data){
		this.user = data;
	}

}