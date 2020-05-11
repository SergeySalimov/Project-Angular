import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service';
import { NavigationService } from '../shared/services/navigation/navigation.service';
import { NavigationLink } from '../shared/models/navigationLink';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  collapse = true;
  registration: NavigationLink;

  doCollapse() {
    this.collapse = true;
  }

  constructor(public authService: AuthService,
              private navigation: NavigationService) { }

  ngOnInit(): void {
    this.registration = this.navigation.logLinks[1];
  }

}
