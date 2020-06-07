import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, User } from '../shared';

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
    return false;
  }

  hideDropDown() {
    setTimeout(() => this.showDropdown = false, 500);
  }

  doCollapse() {
    this.collapse = true;
  }

}
