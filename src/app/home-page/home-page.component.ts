import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isPageLoaded: boolean = false;

  constructor() { }

  ngOnInit(){
    setTimeout(()=>{
      this.isPageLoaded = true;
          }, 2000) 
  }
  getBackgroundImageURL(){
  
    return "url('./assets/temp-home-background.jpg')";

  } 

}
