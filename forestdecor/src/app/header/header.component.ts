import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from "../shared/services/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean;

  constructor(public readonly authService: AuthService) { }

  ngOnInit(): void {
    this.isLogged = this.authService.isLogged;
  }

}
