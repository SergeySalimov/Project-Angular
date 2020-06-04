import { Injectable } from '@angular/core';
import { ContactUsMsg } from '../../models/contactUsMsg.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

enum Categorie {
  new,
  readed,
  deleted
}

@Injectable({
  providedIn: 'root'
})
export class MsgsService {

  curMessage: ContactUsMsg;

  constructor( private http: HttpClient) {
  }

  sendMessage(msg: ContactUsMsg, folder: Categorie): Observable<Object> {
    this.curMessage = {...msg};
    if (folder === Categorie.new) {
      const date: number = +Date.now();
      this.curMessage = {...msg, date, categorie: Categorie.new, checked: false};
      delete this.curMessage.isRegisterAfter;
    }
    return this.http.post<Object>(`${environment.firebase.databaseURL}/messages/${Categorie[0]}.json`, this.curMessage);
  }
}
