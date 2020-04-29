import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  showNav = true;

  classForContent = {
    'col-sm-6': this.showNav,
    'col-md-7': this.showNav,
    'col-lg-8': this.showNav,
    'col-xl-9': this.showNav,
    'col-12': !this.showNav
  };

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    console.log('show');
    this.showNav = true;
  }

  doHideNav() {
    console.log('hide');
    this.showNav = false;
  }


}
