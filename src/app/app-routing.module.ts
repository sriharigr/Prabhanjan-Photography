import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreviewImageComponent } from './preview-image/preview-image.component';
import { UploadImagesComponent } from './upload-images/upload-images.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuardService } from './security/auth-guard.service';
PreviewImageComponent
const routes: Routes = [
  {  
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  },
  {  
    path: 'login',
    component: LoginPageComponent,
  },
  {  
    path: 'home',
    component: HomePageComponent
  }, 
  {  
    path: 'preview',
    component: PreviewImageComponent
  },  
  {  
    path: 'upload',
    component: UploadImagesComponent,
    canActivate: [AuthGuardService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
