import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  _isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  _messagesSpiner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  get isLoading() {
    return this._isLoading;
  }

  setStatus(status: boolean) {
    this._isLoading.next(status);
  }

  get msgsSpiner() {
    return this._messagesSpiner;
  }

  setMessagesSpinerStatus(status: boolean) {
    this._messagesSpiner.next(status);
  }


}
