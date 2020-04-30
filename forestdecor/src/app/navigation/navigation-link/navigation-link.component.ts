import { Component, Output, OnInit, EventEmitter } from '@angular/core';

interface NavigationLink {
  name: string;
  routerLink: string;
}

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnInit {

  @Output() needToCollapse: EventEmitter<void> = new EventEmitter<void>();

  public navigationLinks: NavigationLink[] = [
    { name: 'Каталог', routerLink: '/catalog/all'},
    { name: 'Сообщения', routerLink: '/messages'},
    { name: 'Доставка', routerLink: '/delivery'},
    { name: 'Оплата', routerLink: '/payment'},
    { name: 'Контакты', routerLink: '/contacts'},
  ];

  constructor() { }

  ngOnInit(): void {}

}
