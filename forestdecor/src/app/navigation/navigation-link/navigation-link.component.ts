import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnChanges, OnInit {

  navigationLinks: string[] = [
    'Каталог',
    'Доставка',
    'Оплата',
    'Контакты'
  ];

  @Input() isLogged;

  constructor() { }

  ngOnChanges(): void {
    if (this.isLogged) {
      this.navigationLinks.splice(1,0, 'Сообщения');
    } else {
      this.navigationLinks = [
        'Каталог',
        'Доставка',
        'Оплата',
        'Контакты'
      ];
    }
  }

  ngOnInit(): void {

  }


}
