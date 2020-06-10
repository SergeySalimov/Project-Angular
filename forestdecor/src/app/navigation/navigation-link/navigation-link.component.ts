import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService, NavigationLink, NavigationService } from '../../shared';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnInit, OnDestroy {

  public navigationLinks: NavigationLink[];
  private userSubscription: Subscription;

  constructor( private navigationService: NavigationService, private authService: AuthService ) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      user?.isAdmin ? this.navigationLinks = this.navigationService.getNavigationLinks(true) :
        this.navigationLinks = this.navigationService.getNavigationLinks(false);
    });
  }

  collapseBurger(state) {
    this.navigationService.setCollapseBurger(state);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
