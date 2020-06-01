import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './shared/services/auth/user';
import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'forestdecor';
  user$: Observable<User> = this.auth.user;

  constructor(public auth: AuthService) {
  }

}
