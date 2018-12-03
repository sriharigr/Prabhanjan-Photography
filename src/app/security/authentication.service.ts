import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  isUserLoggedIn: boolean = false;
  isAuthenticated: BehaviorSubject<any> = new BehaviorSubject<any>(this.isUserLoggedIn);

  constructor(private router: Router) {
    this.isAuthenticated.subscribe((response: any)=>{
     this.isUserLoggedIn = response;
    })
   }

   logout(){
    this.isAuthenticated.next(false);
    this.router.navigate(['home']); 
  }
}
