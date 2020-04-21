import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-element',
  templateUrl: './navigation-element.component.html',
  styleUrls: ['./navigation-element.component.scss']
})
export class NavigationElementComponent implements OnInit {

  home: string = '<img src="assets/images/oak-sm.png" class="d-inline-block align-top" alt="oak">';
  logIn: string = '<i class="icon-login" style="font-size: 2rem"></i>';
  logOut: string = '<i class="icon-logout" style="font-size: 2rem"></i>';

  constructor() { }

  ngOnInit(): void {
  }

}
