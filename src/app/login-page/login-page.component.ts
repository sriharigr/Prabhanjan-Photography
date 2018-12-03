import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifyComponent } from '../notify/notify.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthenticationService } from '../security/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private notify: NotifyComponent, private fireAuth: AngularFireAuth, private authenticationService: AuthenticationService, private router: Router) {
    this.loginForm = new FormGroup({
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {

  }

  login() {
    if (!this.loginForm.invalid) {
      this.fireAuth.auth.signInWithEmailAndPassword(this.loginForm.value.emailId, this.loginForm.value.password).then((response: any) => {
        this.authenticationService.isAuthenticated.next(true);
        this.router.navigate(['upload']);
      }).catch((error) => {
        this.authenticationService.isAuthenticated.next(false);
        var errorMessage = error.code.substring(5, error.code.length);
        this.displayError(errorMessage, 3000);
      })
    } else {
      this.notify.notify('Please Provide Valid Details', 2000);
    }
  }

logout(){
  this.authenticationService.isAuthenticated.next(false);
  this.router.navigate(['home']);
}

  displayError(message, duration) {
    this.notify.notify(message.toUpperCase(), duration);
  }

}
