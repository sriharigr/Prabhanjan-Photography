import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpHeaders, 
  HttpClient
} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { AuthenticationService } from './authentication.service';


@Injectable({  
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  headers: HttpHeaders;

  constructor(private router: Router, private http: HttpClient, private authenticationService: AuthenticationService
  ) { 
    this.headers = new HttpHeaders({"Content-Type": "application/json"});
  }

  canActivate(router: ActivatedRouteSnapshot ,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{

  
    if(this.authenticationService.isAuthenticated.getValue()==true){ 
      return true;
    }else{
      this.router.navigate(['login']);
      return new Observable<false>();
    }
  
  }

  isSessionActive() {  

  }
  

} 