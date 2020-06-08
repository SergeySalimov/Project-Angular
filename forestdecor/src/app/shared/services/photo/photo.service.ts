import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map, switchMap, tap } from 'rxjs/operators';
import { PhotoUrl } from '../../models/photo-url.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private _uploadProgress: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private storage: AngularFireStorage, private http: HttpClient) {
  }

  get uploadProgress() {
    return this._uploadProgress.asObservable();
  }

  uploadFile(file, folder: string) {
    const filePath = `/${folder}/${file.name}`;
    const ref: AngularFireStorageReference = this.storage.ref(filePath);
    const task: AngularFireUploadTask = ref.put(file);
    task.percentageChanges().subscribe(number => this._uploadProgress.next(number));
    task.then((data) => {
      console.log(data.metadata.name);
      const filePath = `/${folder}/${data.metadata.name}`;
      this.storage.ref(filePath).getDownloadURL().pipe(
        tap(() => setTimeout(() => {this._uploadProgress.next(0)}, 2000)),
        switchMap((url: string) => this.sendPhotoUrlToServer(folder, [url])),
        )
        .subscribe(data => {
        console.log(data);
      });
    });
  }

  updatePhotoUrl(folder, newestData) {
    return this.deletePhotoFromServer(folder).pipe(
      switchMap(() => this.sendPhotoUrlToServer(folder, newestData))
    );
  }

  //ServerBlock
  sendPhotoUrlToServer(folder: string, data) {
    const headers: HttpHeaders = new HttpHeaders({[environment.NEED_TOKEN]: 'Add-my-token', [environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    return this.http.post<string[]>(`${environment.firebase.databaseURL}/photos/${folder}.json`, data, {headers});
  }

  deletePhotoFromServer(folder: string) {
    const headers: HttpHeaders = new HttpHeaders({[environment.NEED_TOKEN]: 'Add-my-token', [environment.GLOBAL_SPINNER]: 'spinnerNeeded'});
    return this.http.delete<string[]>(`${environment.firebase.databaseURL}/photos/${folder}.json`, {headers});
  }

  getPhotosFromServer() {
    return this.http.get<PhotoUrl[]>(`${environment.firebase.databaseURL}/photos.json`).pipe(
      map(data => {
        const photoUrl: PhotoUrl[] = [];
        for (let key in data) {
          const [fakeCopy, urlArr] = [data[key], []];
          for (let key2 in fakeCopy) {
            urlArr.push(...fakeCopy[key2])
          }
          photoUrl.push({urlName: key, urlList: [...new Set(urlArr)]});
        }
        return photoUrl;
      }),
    )
  }
}
