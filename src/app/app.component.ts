import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/app.services.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  showSideBar = true;
  toggleMenu=true;
  isLoggedIn = false;
  user;
  
  constructor(private router:Router, private authService : AuthService ){}
  login (data){
  	if (data.token){
  		this.user = data.user
  		this.isLoggedIn = true
  		this.router.navigate(['planner']);
  	}
  }

  logout(data){
  	console.log('from service ' , this.authService.getUser())
  	console.log(data)
  	this.isLoggedIn = false;
  	this.router.navigate(['']);
  }
}
