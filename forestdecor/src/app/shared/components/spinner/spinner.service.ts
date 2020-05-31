import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoading() {
    return this._isLoading;
  }

  setStatus(status: boolean) {
    this._isLoading.next(status);
  }

  on() {
    this._isLoading.next(true);
  }

  off() {
    this._isLoading.next(false);
  }

}
