import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss',
],  encapsulation: ViewEncapsulation.None

})
export class NotifyComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  notify(message, duration){
    let config = new MatSnackBarConfig();
    config.duration = duration;  
    config.panelClass = ['success-failure']
    this.snackBar.open(message, "Close", config);
    }
  

}

    
    
