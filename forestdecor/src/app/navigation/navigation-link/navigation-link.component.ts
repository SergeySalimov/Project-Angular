import { Component, Output, OnInit, EventEmitter, OnDestroy, Input } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation/navigation.service';
import { NavigationLink } from '../../shared/models/navigationLink';
import { AuthService } from '../../shared/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnInit, OnDestroy {

  @Output() needToCollapse: EventEmitter<void> = new EventEmitter<void>();

  public navigationLinks: NavigationLink[];
  private userSubscription: Subscription;

  constructor( private navigationService: NavigationService, private authService: AuthService ) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.user.subscribe(user => {
      user?.isAdmin ? this.navigationLinks = this.navigationService.getNavigationLinks(true) :
        this.navigationLinks = this.navigationService.getNavigationLinks(false);
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
