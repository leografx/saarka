import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/app.services.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  showSideBar = true;
  toggleMenu=false;
  isLoggedIn = false; // must change to false in production
  user;
  
  constructor(private router:Router, private authService : AuthService ){}
  ngOnInit(){
    //must delete before deployment for production
    //this.isLoggedIn=true;
    //this.router.navigate(['sales']);
  }

  login (data){
  	if (data.token){
  		this.user = data.user
  		this.isLoggedIn = true
  		this.router.navigate(['planner']);
  	}
  }

  logout(data){
  	//console.log('from service ' , this.authService.getUser())
  	//console.log(data)
  	this.isLoggedIn = false;
    this.toggleMenu=false;
    this.showSideBar = true;
  	this.router.navigate(['']);
  }
}
