import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prabhanjan-photography';
  getBackgroundImageURL(){
    return "url('./assets/temp-home-background.jpg')";
  
  }
}
