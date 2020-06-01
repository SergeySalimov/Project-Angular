import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { User } from '../shared/services/auth/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent{

  collapse = true;
  showDropdown = false;
  user$: Observable<User> = this.auth.user;

  constructor(public auth: AuthService) {
  }

  userLogout() {
    this.auth.logout();
  }

  hideDropDown() {
    setTimeout(() => this.showDropdown = false, 500);
  }

  doCollapse() {
    this.collapse = true;
  }

}
