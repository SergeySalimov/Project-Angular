import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private storage: AngularFireStorage) { }

  showFileLog() {
    const name = "shishki-olkhi.jpg";
    console.log('show');
    this.storage.ref(name).getDownloadURL().subscribe((data) => console.log(data)
    )


  }

  onFileChange(event) {
    const file = event.target.files[0];
    const filePath = `/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
    task.then((data) => {
      console.log(data.metadata.name)
    });
  }

}
