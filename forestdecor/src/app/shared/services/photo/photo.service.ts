import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { ConsoleService } from '../console/console.service';
import { MESSAGES } from '../../models/console-messages';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private _uploadProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private storage: AngularFireStorage, private console: ConsoleService) {
  }

  get uploadProgress() {
    return this._uploadProgress.asObservable();
  }

  showFileLog() {
    const name = "shishki-olkhi.jpg";
    console.log('show');
    this.storage.ref(name).getDownloadURL().subscribe((data) => console.log(data)
    )
  }


  uploadFile(file, folder: string) {
    console.log(folder);
    const filePath = `/${folder}/${file.name}`;
    const ref: AngularFireStorageReference = this.storage.ref(filePath);
    const task: AngularFireUploadTask = ref.put(file);
    task.percentageChanges().subscribe(number => this._uploadProgress.next(number));
    task.then((data) => {
      console.log(data.metadata.name);
      this.console.showInfoMessage(MESSAGES.FILE_LOADED, MESSAGES.FILE_LOADED_TIMER);
      setTimeout(() => {this._uploadProgress.next(0)}, 2000)
    });
  }

}
