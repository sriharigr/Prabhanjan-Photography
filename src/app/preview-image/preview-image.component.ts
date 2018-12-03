import { Component, OnInit } from '@angular/core';
import { UploadImagesService } from '../upload-images/upload-images.service';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrls: ['./preview-image.component.css']
})
export class PreviewImageComponent implements OnInit {

  listOfUploadedRecords: any = [];
  loadingRecords: boolean = true;
  spinnerColor = 'primary';
  spinnerMode = 'indeterminate';
  spinnerValue = 0; 
  selectedImageURL: string = '';
  constructor(private uploadImageService: UploadImagesService) { }

  ngOnInit() {
    this.listOfUploadedRecords = []; 
    this.uploadImageService.getRecords().subscribe((response: any) => {
      this.loadingRecords = false;
         this.listOfUploadedRecords = response.map((item) => {
           return {
             ...item.payload.val()
           };
         }); 
         this.listOfUploadedRecords.reverse(); 
       })
  }  
 
  view(imageID){
    this.selectedImageURL = '';
this.uploadImageService.getImage(imageID).subscribe((response: any)=>{
  this.selectedImageURL = response; 
})
  }
}
