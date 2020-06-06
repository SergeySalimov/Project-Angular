import { Injectable } from '@angular/core';
import { Message } from '../../models/message.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Categorie } from '../../models/categories-of-messages';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MsgsService {

  private curMessage: Message;
  private _messages: BehaviorSubject<Message[]> = new BehaviorSubject<Message[]>([]);
  private _currentState: BehaviorSubject<Categorie> = new BehaviorSubject<Categorie>(environment.START_CATEGORIE);
  private _selectAll: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private auth: AuthService) {
    this.auth.user.subscribe(user => {
      user?.isAdmin ? this.getMessagesFromServer().subscribe((messages: Message[]) => this._messages.next(messages)) : null;
    });
  }

  get messages(): Observable<Message[]> {
    return this._messages.asObservable();
  }

  get categorie(): Observable<Categorie> {
    return this._currentState.asObservable();
  }

  get selectAll(): Observable<boolean> {
    return this._selectAll.asObservable();
  }

  setCategorie (newCategorie: Categorie) {
    this._currentState.next(newCategorie);
  }

  setSelectAll (state: boolean) {
    this._selectAll.next(state);
  }

  static getStringReturnEnumCategorie(data: string): Categorie {
    let categorie: Categorie;
    switch (data) {
      case 'new':
        categorie = Categorie.new;
        break;
      case 'readed':
        categorie = Categorie.readed;
        break;
      case 'deleted':
        categorie = Categorie.deleted;
        break;
      default:
        categorie = Categorie.new;
    }
    return categorie;
  }

  changeAllCheckedMessage(del: boolean = true) {
    this._messages.getValue().forEach(msg => {
      if (msg.isChecked) {
        msg.isChecked = false;
        msg.categorie = del ? Categorie.deleted : Categorie.readed;
      }
    });
    this.setSelectAll(false);
  }

  //Server Block
  updateMessage(id: string, message: Message) {
    const headers: HttpHeaders = new HttpHeaders({
      [environment.NEED_TOKEN]: 'Add-my-token',
      [environment.LITTLE_SPINNER]: 'Little-spinner-needed'
    });
    return this.http.put<Message>(`${environment.firebase.databaseURL}/messages/${id}.json`, message, {headers})
  }

  deleteMessageFromServer(id: string) {
    const headers: HttpHeaders = new HttpHeaders({
      [environment.NEED_TOKEN]: 'Add-my-token',
      [environment.LITTLE_SPINNER]: 'Little-spinner-needed'
    });
    return this.http.delete(`${environment.firebase.databaseURL}/messages/${id}.json`, {headers});
  }

  sendMessageToServer(msg: Message): Observable<Object> {
    const headers: HttpHeaders = new HttpHeaders({[environment.LITTLE_SPINNER]: 'Little-spinner-needed'});
    this.prepareCurMessageForSendingToServer(msg);
    return this.http.post<Message>(`${environment.firebase.databaseURL}/messages.json`, this.curMessage, {headers});
  }

  getMessagesFromServer(): Observable<Message[]> {
    const headers: HttpHeaders = new HttpHeaders({
      [environment.NEED_TOKEN]: 'Add-my-token',
      [environment.LITTLE_SPINNER]: 'Little-spinner-needed'
    });
    return this.http.get<Message[]>(`${environment.firebase.databaseURL}/messages.json`, {headers})
      .pipe(
        map((data: any) => {
          const messages: Message[] = [];
          for (let key in data) {
            messages.push({id: key, isChecked: false, ...data[key]});
          }
          return messages;
        }),
      );
  }

  prepareCurMessageForSendingToServer(msg: Message) {
    this.curMessage = {...msg};
    const date: number = +Date.now();
    this.curMessage = {...msg, date, categorie: Categorie.new, isChecked: false};
    delete this.curMessage.isRegisterAfter;
  }
}

