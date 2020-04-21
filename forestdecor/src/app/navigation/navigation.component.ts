import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  collapse: boolean = true;

  doCollapse() {
    this.collapse = true;
  }

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
