import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CustomError } from './customError';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService {

  private _errorsSubject: BehaviorSubject<CustomError> = new BehaviorSubject<CustomError>(null);

  constructor() { }

  showError(error: CustomError, timer: number = 4000) {
    this.setError(error);
    if (timer !== 0) {
      setTimeout(() => {
        this.hideError();
      }, timer);
    }
  }

  setError(error: CustomError) {
    this._errorsSubject.next(error);
  }

  get error() {
    return this._errorsSubject;
  }

  hideError() {
    this._errorsSubject.next(null);
  }
}
