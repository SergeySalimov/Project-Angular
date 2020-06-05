import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MsgsService } from './msgs.service';
import { Message } from '../../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MsgsResolver implements Resolve<Message[]> {

  constructor (private msgsService: MsgsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Message[]> {
    return this.msgsService.getMessagesFromServer();
  }
}
