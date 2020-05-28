import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogNavigationService {

  private _status = true;

  constructor() { }

  get status() {
    return this._status;
  }

  show() {
    this._status = true;
  }

  hide() {
    this._status = false;
  }

}
