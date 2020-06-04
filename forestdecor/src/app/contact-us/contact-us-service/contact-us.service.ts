import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUsMsg } from '../../shared/models/contactUsMsg.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

enum Categorie {
  new,
  readed,
  deleted
}

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  message: ContactUsMsg;

  constructor( private http: HttpClient) {
  }

  sendMessage(msg: ContactUsMsg, folder: string = 'new'): Observable<Object> {
    this.message = {...msg};
    if (folder === 'new') {
      const date: number = +Date.now();
      this.message = {...msg, date, categorie: Categorie.new, checked: false};
      delete this.message.isRegisterAfter;
    }
    return this.http.post<Object>(`${environment.firebase.databaseURL}/messages/${folder}.json`, this.message);
  }


  // const folder = formatDate(date, 'yyyy-MM-dd', 'en-US');
}
