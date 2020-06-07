import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, PhotoService, User } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'forestdecor';
  user$: Observable<User> = this.auth.user;

  constructor(public auth: AuthService, private photo: PhotoService) {
  }



}
