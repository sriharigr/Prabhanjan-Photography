import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../security/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.authenticationService.isAuthenticated.getValue();
    this.authenticationService.isAuthenticated.subscribe((response: any)=>{
      this.isUserLoggedIn = response;
    })
  }

  navigate(route){
    this.router.navigate([route]); 
  }
  logout(){
    this.authenticationService.logout();
  }
}
