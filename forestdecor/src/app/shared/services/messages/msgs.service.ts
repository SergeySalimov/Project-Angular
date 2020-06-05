import { Injectable } from '@angular/core';
import { Message } from '../../models/message.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Categorie } from '../../models/categories-of-messages';
import { exhaustMap, finalize, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MsgsService {

  private curMessage: Message;
  private _messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);

  constructor(private http: HttpClient, private auth: AuthService) {
    this.auth.user.subscribe(user => {
      user?.isAdmin ? this.getMessagesFromServer().subscribe((messages: Message[]) => this._messages.next(messages)) : null;
    });
  }

  get messages() {
    return this._messages.asObservable();
  }

  sendChangesToServer(id: string, msg: Message, categorieFrom: Categorie, categorieTo: Categorie) {
    return this.sendMessageToServer(msg, categorieTo).pipe(
      switchMap(() => this.deleteMessageFromServer(id, categorieFrom)),
    )
  }

  deleteMessageFromServer(id: string, folder: Categorie) {
    const headers: HttpHeaders = new HttpHeaders({[environment.NEED_TOKEN]: 'Add-my-token'});
    return id === 'all' ? this.http.delete(`${environment.firebase.databaseURL}/messages/${Categorie[folder]}.json`) :
      this.http.delete(`${environment.firebase.databaseURL}/messages/${Categorie[folder]}/${id}.json`);
  }

  sendMessageToServer(msg: Message, folder: Categorie): Observable<Object> {
    this.curMessage = {...msg};
    if (folder === Categorie.new) {
      const date: number = +Date.now();
      this.curMessage = {...msg, date, categorie: Categorie.new};
      delete this.curMessage.isRegisterAfter;
    } else {
      this.curMessage.isChecked = false;
    }
    return this.http.post<Message>(`${environment.firebase.databaseURL}/messages/${Categorie[folder]}.json`, this.curMessage).pipe(
      tap((data) => {
        console.log(data);
      })
    );
  }

  getMessagesFromServer(folder: Categorie = Categorie.new): Observable<Message[]> {
    const headers: HttpHeaders = new HttpHeaders({[environment.NEED_TOKEN]: 'Add-my-token'});
    return this.http.get<Message[]>(`${environment.firebase.databaseURL}/messages/${Categorie[folder]}.json`, {headers})
      .pipe(
        map((data: any) => {
          const messages: Message[] = [];
          if (!data?.id) {
            for (let key in data) {
              messages.push({id: key, isChecked: false, ...data[key]});
            }
          } else {
            messages.push(data.value)
            console.log(data.value);
          }
          return messages;
        }),
      );
  }



  // getAllMessages() {
  //   this.serverWork.next(true);
  //   const allMsgs: Message[] = [];
  //   combineLatest([
  //     this.getMessagesFromNew(),
  //     this.getMessageFromReadedOrDeleted()
  //   ]).subscribe(([newMessages, readedMessages]) => {
  //     console.log(newMessages);
  //     console.log(readedMessages);
  //   });
  //
  //   setTimeout(() => {this.serverWork.next(false)}, 5000)
  //
  // }





  // getMessageFromReadedOrDeleted(folder: Categorie = Categorie.readed): Observable<Message[]> {
  //   const headers: HttpHeaders = new HttpHeaders({[environment.NEED_TOKEN]: 'Add-my-token'});
  //   return this.http.get<Message[]>(`${environment.firebase.databaseURL}/messages/${Categorie[folder]}.json`, {headers});
  // }

}

