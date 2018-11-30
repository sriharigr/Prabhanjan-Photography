import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImagesService {

  list: AngularFireList<any>;
  ref: any;
  task: AngularFireUploadTask;
  uploadProgress: Subject<any> = new Subject();
  constructor(private firebaseDB: AngularFireDatabase, private firebaseStorage: AngularFireStorage) {
    this.list = this.firebaseDB.list('test'); 
  }


  saveRecord(data) {
    return this.list.push(data);
  }

  uploadImage(event) {
    const randomId = Math.random().toString(36).substring(2);
    this.ref = this.firebaseStorage.ref(randomId);
    this.task = this.ref.put(event.target.files[0]);
    this.task.percentageChanges().subscribe((response: any) => {
      this.uploadProgress.next(response);
    });
    return this.task;

  }

  getRecords() {
    return this.list.snapshotChanges();

  }
}
