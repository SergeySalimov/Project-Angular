import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  collapse: boolean = true;

  @Input() isLogged;
  @Output() logged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toFakeLogin() {
    this.logged.emit(true);
  }

  toFakeLogout() {
    this.logged.emit(false);
  }

}
