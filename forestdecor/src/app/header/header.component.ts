import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthService, User } from '../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user$: Observable<User> = this.auth.user;
  phoneNumber: string = environment.phoneNumber;
  constructor(public auth: AuthService) {
  }

}
