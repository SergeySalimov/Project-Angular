import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomConsole } from './customConsole';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  private _consoleSubject: BehaviorSubject<CustomConsole> = new BehaviorSubject<CustomConsole>(null);

  constructor() { }

  setConsole(console: CustomConsole) {
    this._consoleSubject.next(console);
  }

  get console() {
    return this._consoleSubject;
  }

  showInfoMessage(customConsole: CustomConsole, timer: number = 8000) {
    this.setConsole(customConsole);
    if (timer !== 0) {
      setTimeout(() => {
        this.hideConsole();
      }, timer);
    }
  }

  hideConsole() {
    this._consoleSubject.next(null);
  }
}
