import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUsMsg } from '../../models/contactUsMsg.model';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  message: ContactUsMsg;

  constructor( private http: HttpClient) {
  }

  sendMessage(msg: ContactUsMsg, folder = 'new'): Observable<Object> {
    if (folder = 'new') {
      const date: number = +Date.now();
      this.message = {...msg, date};
      delete this.message.isRegisterAfter;
    }
    return this.http.post(`${environment.messagesUrl}/${folder}.json`, this.message);
  }


  // const folder = formatDate(date, 'yyyy-MM-dd', 'en-US');
}
