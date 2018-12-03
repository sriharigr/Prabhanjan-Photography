import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadImagesService } from './upload-images.service';
import { NotifyComponent } from '../notify/notify.component';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class UploadImagesComponent implements OnInit {

  @ViewChild('file') file;
  uploadForm: FormGroup;
  uploadProgressCount: number = 0;
  items: any;
  color = 'warn';
  mode = 'determinate';
  value = 0;

  bufferValue = 0;
  listOfUploadedRecords: any = [];
  uploadingFileName: string = '';
  isImageUploaded: boolean = false;
  imageUploadIntitiated: string = 'NO';
  loadingRecords: boolean = true;
  profileData = { name: '', category: '', imageID: '' };
  constructor(private uploadImageService: UploadImagesService, private notify: NotifyComponent) {
    this.uploadForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      imageID: new FormControl()
    });

  }

  ngOnInit() {

  }

  initForm() {
    this.uploadForm.patchValue({
      name: '',
      category: '',
      imageID: ''
    });
    this.uploadForm.markAsPristine();
    this.uploadForm.markAsUntouched();
  }

  save() {
    if (this.uploadForm.invalid) {
      this.notify.notify('Please Provide all the fields', 2000);
    }
    else if (this.imageUploadIntitiated == 'YES' && !this.isImageUploaded) {
      this.notify.notify('Please wait, image is being uploaded', 2000);
    } else if (!this.isImageUploaded) {
      this.notify.notify('Please Upload a Image', 2000);
    } else {
      this.uploadImageService.saveRecord(this.uploadForm.value).then((response: any) => {
        this.notify.notify('Record Saved Successfully', 3000);
        setTimeout(() => {
          this.initForm();
          this.imageUploadIntitiated = 'NO';
          this.isImageUploaded = false;
          this.uploadingFileName = '';
          this.value = 0;
        }, 300);

      });
    }
  }

  uploadImage(event) {
    this.imageUploadIntitiated = 'YES';
    this.value = 5;
    this.uploadingFileName = event.target.files[0].name;
    this.uploadingFileName = this.uploadingFileName.substring(0, this.uploadingFileName.lastIndexOf('.'));
    this.uploadImageService.uploadProgress.subscribe((response: any) => {
      this.value = response;
    })
    this.uploadImageService.uploadImage(event).then((response: any) => {
      this.imageUploadIntitiated = 'COMPLETED';
      if (response.state == 'success') {
        this.isImageUploaded = true;
        this.uploadForm.controls['imageID'].setValue(response.metadata.name);
      }
    })
  }


  progressInPercentage() {
    return Math.ceil(this.value);
  }

  toUpperCase(property) {
    this.uploadForm.controls[property].setValue(this.uploadForm.controls[property].value.toUpperCase());
  }


  
}
