import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users/users.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

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

  getUsers() {
    // this.users.signInAnonymously()
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

}
