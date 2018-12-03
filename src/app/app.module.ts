import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {AngularFireAuthModule } from '@angular/fire/auth'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common-components/header/header.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment'; 
import { NotifyComponent } from './notify/notify.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PreviewImageComponent } from './preview-image/preview-image.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardService } from './security/auth-guard.service';
import { AuthenticationService } from './security/authentication.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [  
    AppComponent, 
    HeaderComponent,
    UploadImagesComponent,
    NotifyComponent,
    PreviewImageComponent,
    HomePageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatProgressSpinnerModule
  ],
  providers: [NotifyComponent, AuthGuardService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
