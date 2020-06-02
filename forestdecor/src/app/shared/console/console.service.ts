import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomConsole } from './customConsole';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  private _errorsSubject: BehaviorSubject<CustomConsole> = new BehaviorSubject<CustomConsole>(null);

  constructor() { }

  showInfoMessage(customConsole: CustomConsole, timer: number = 8000) {
    this.setError(customConsole);
    if (timer !== 0) {
      setTimeout(() => {
        this.hideError();
      }, timer);
    }
  }

  setError(error: CustomConsole) {
    this._errorsSubject.next(error);
  }

  get error() {
    return this._errorsSubject;
  }

  hideError() {
    this._errorsSubject.next(null);
  }
}
