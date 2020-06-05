import { Injectable } from '@angular/core';
import { Message } from '../../models/message.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Categorie } from '../../models/categories-of-messages';
import { map, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MsgsService {

  private curMessage: Message;
  private _messages: Message[];

  constructor(private http: HttpClient, private auth: AuthService) {
    this.auth.user.subscribe( user => {
      user.isAdmin ? this.getMessagesFromServer().subscribe((messages: Message[]) => this._messages = messages) : null;
    });
  }

  get messages() {
    return [...this._messages];
  }

  sendMessage(msg: Message, folder: Categorie): Observable<Object> {
    this.curMessage = {...msg};
    if (folder === Categorie.new) {
      const date: number = +Date.now();
      this.curMessage = {...msg, date, categorie: Categorie.new};
      delete this.curMessage.isRegisterAfter;
    }
    return this.http.post<Message>(`${environment.firebase.databaseURL}/messages/${Categorie[folder]}.json`, this.curMessage).pipe(
      tap((data) => {
        console.log(data);
      })
    );
  }

  getMessagesFromServer(folder: Categorie = Categorie.new) {
    const headers: HttpHeaders = new HttpHeaders({[environment.NEED_TOKEN]: 'Add-my-token'});
    return this.http.get(`${environment.firebase.databaseURL}/messages/${Categorie[folder]}.json`, {headers})
      .pipe(
        map((data: any) => {
          const messages: Message[] = [];
          console.log(data);
          for (let key in data) {
            messages.push({id: key, isChecked: false, ...data[key]});
          }
          console.log(messages);
          return messages;
        }),
      );
  }

}

