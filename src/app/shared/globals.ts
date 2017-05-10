import { environment } from '../../environments/environment';
let url:string;

if ( environment.production ){
	url = 'http://saarka.com/api/';
	
}else{
	url = 'http://aeab.dev:3033/';
}

export const baseUrl = ()=> url;
