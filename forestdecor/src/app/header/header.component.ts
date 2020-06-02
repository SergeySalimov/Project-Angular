import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../shared/services/auth/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$: Observable<User> = this.auth.user;
  phoneNumber = environment.phoneNumber;

  constructor(public auth: AuthService) {
  }

}
