import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, NavigationService, User } from '../shared';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent{

  collapse = true;
  showDropdown = false;
  user$: Observable<User> = this.auth.user;
  collapse$ = this.navigation.collapseBurger;


  constructor(public auth: AuthService, private navigation: NavigationService) {
  }

  onBurgerClick() {
    this.collapse$.pipe(take(1)).subscribe((state: boolean) => this.navigation.setCollapseBurger(!state));
  }

  userLogout() {
    this.auth.logout();
    return false;
  }

  hideDropDown() {
    setTimeout(() => this.showDropdown = false, 500);
  }

}
